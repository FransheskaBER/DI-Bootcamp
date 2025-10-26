import express from "express";
import chatRouter from "./routes/chatRoutes.js";
import http from "http";
import { Server } from "socket.io";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// Serve ./public as static files
app.use(express.static(path.join(__dirname, "public")))

app.use(express.json());
app.use("/", chatRouter);

// create an HTTP server from Express and attach Socket.IO:
// wrap express in an http server
const httpServer = http.createServer(app); 
// create a socket.IO server
const io = new Server(httpServer, {
    cors: { origin: "*" }
});


// capture username:
io.use((socket, next) => {
    const { username } = socket.handshake.auth;
    if (!username) return next(new Error("username required"));
    socket.data.username = username;
    next();
});

const activeUsers = new Set();
// Socket.IO handle connections:
io.on("connection", (socket) => {    // runs when a new browser connects
    activeUsers.add(socket.data.username);
    console.log("socket connected:", socket.data.username);

    // notify everyone when a user connectes
    io.emit("active-users", Array.from(activeUsers));


    // put all users in a "lobby" room to broadcast messages easily
    socket.join("lobby");

    // listen for mesafes from this client:
    socket.on("chat:message", (text) => {  // the "chat:message" is an event name we want to listen to
        // now you can broadcast to everyone in "lobby" (including sender):
        io.to("lobby").emit("chat:message", { username: socket.data.username, text });
    });

    // clean up when user disconnectes:
    socket.on("disconnect", () => {
        activeUsers.delete(socket.data.username);
        io.emit("active-users", Array.from(activeUsers));
        console.log("socket disconnected:", socket.data.username);
    });
});


app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
    console.log("Error:", err);
    const status = err.status || 500;
    const message = err.message || "Network error";
    res.status(status).json({ error: message });
})

const PORT = 4400;
httpServer.listen(PORT, () => console.log(`Server with Socket.IO on ${PORT}`));