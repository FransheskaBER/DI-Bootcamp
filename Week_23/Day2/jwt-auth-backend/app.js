import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import pool from "./db.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

const PORT = process.env.PORT || 5000;

// middlewares:
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use('/auth', authRoutes);


app.get('/', (req, res) => {
    res.send('JWT Authentication Server is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});