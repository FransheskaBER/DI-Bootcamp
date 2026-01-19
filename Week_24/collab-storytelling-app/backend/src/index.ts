import express  from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { createServer } from "http";
import { Server } from "socket.io";
import jwt from "jsonwebtoken";

import authRoutes from "./routes/authRoutes.js";
import storyRoutes from "./routes/storyRoutes.js";
import contributorRoutes from "./routes/contributorRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import reactionRoutes from './routes/reactionRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import { getStoryById } from "./models/storyModel.js";
import { isContributor } from "./models/contributorModel.js";

// load env variable from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// create HTTP server (required for Socket.IO)
const httpServer = createServer(app);

// Attach Socket.IO to the http server
const io = new Server(httpServer, {
    cors: {
        origin: process.env.FRONTEND_URL || 'http://localhost:5173',
        methods: ["GET", "POST"],
        credentials: true,
    },
});

// add global middleware for JWT auth
io.use((socket, next) => {
    const token = socket.handshake.auth.token;

    if (!token) {
        return next(new Error("Authentication required"));
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { userId: number };
        // Attach user data to socket for later use
        socket.data.userId = decoded.userId;
        console.log(`Socket authenticated: ${socket.id}, userId: ${decoded.userId}`);
        next();
    } catch (error) {
        console.log('Socket auth error:', error);
        return next(new Error('Invalid or expired token'));
    }
});

// Socket connection handler
io.on("connection", (socket) => {
    const userId = socket.data.userId;
    console.log(`Socket connected: ${socket.id}, userId: ${userId}`);

    // Join a story room for collaborative editing
    socket.on("join-story", async (storyId: number) => {
        try {
            const story = await getStoryById(storyId);
            if (!story) {
                socket.emit("error", { message: "Story not found" });
                return;
            }

            // Check if user is author or contributor
            const isAuthor = story.author_id === userId;
            const isContrib = await isContributor(storyId, userId);

            if (!isAuthor && !isContrib) {
                socket.emit("error", { message: "You don't have permission to edit this story" });
                return;
            }

            const roomName = `story:${storyId}`;
            socket.join(roomName);
            socket.data.currentStory = storyId;
            socket.data.isAuthor = isAuthor;

            console.log(`User ${userId} joined room ${roomName}`);
            socket.emit("joined-story", { storyId, isAuthor });

            // Notify others in the room
            socket.to(roomName).emit("user-joined", { userId });
        } catch (error) {
            console.error("Join story error:", error);
            socket.emit("error", { message: "Failed to join story" });
        }
    });

    // Leave a story room
    socket.on("leave-story", (storyId: number) => {
        const roomName = `story:${storyId}`;
        socket.leave(roomName);
        socket.data.currentStory = null;
        console.log(`User ${userId} left room ${roomName}`);

        // Notify others in the room
        socket.to(roomName).emit("user-left", { userId });
    });

    // Handle story edits - broadcast to others in the room
    socket.on("story-edit", async (data: { storyId: number; content: string; title?: string }) => {
        try {
            const { storyId, content, title } = data;

            // Verify user is still in the room and has permission
            const story = await getStoryById(storyId);
            if (!story) {
                socket.emit("error", { message: "Story not found" });
                return;
            }

            const isAuthor = story.author_id === userId;
            const isContrib = await isContributor(storyId, userId);

            if (!isAuthor && !isContrib) {
                socket.emit("error", { message: "You don't have permission to edit this story" });
                return;
            }

            const roomName = `story:${storyId}`;

            // Broadcast the edit to all OTHER users in the room
            socket.to(roomName).emit("story-updated", {
                storyId,
                content,
                title,
                editedBy: userId,
            });

            console.log(`User ${userId} edited story ${storyId}`);
        } catch (error) {
            console.error("Story edit error:", error);
            socket.emit("error", { message: "Failed to broadcast edit" });
        }
    });

    // Handle disconnect
    socket.on("disconnect", () => {
        const storyId = socket.data.currentStory;
        if (storyId) {
            socket.to(`story:${storyId}`).emit("user-left", { userId });
        }
        console.log(`Socket disconnected: ${socket.id}`);
    });
});




// middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true, //allow cookies to be sent
}));
app.use(express.json());
app.use(cookieParser());

// // test route
// app.get("/", (req, res) => {
//     res.json({ message: "Collaborative Storytelling API is running!" });
// });

// Routes
app.use('/auth', authRoutes);
app.use('/stories', storyRoutes);
app.use('/contributors', contributorRoutes);
app.use('/comments', commentRoutes);
app.use('/reactions', reactionRoutes);
app.use('/upload', uploadRoutes);



// Root Route
app.get('/', (req, res) => {
    res.json({ message: "Collaborative Storytelling API is running!" });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

// global error handler
app.use((error: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error('Unhandled error:', error);
    res.status(500).json({ message: 'Internal server error' });
});

// start server
httpServer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

