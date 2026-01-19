import express  from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import storyRoutes from "./routes/storyRoutes.js";
import contributorRoutes from "./routes/contributorRoutes.js";

// load env variable from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

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
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

