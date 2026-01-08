import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { pool } from "./db.js";
import authRoutes from "./auth.js";

dotenv.config();

const app = express();

app.use(
    cors({
        origin: process.env.CLIENT_ORIGIN,
        credentials: true,
    })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.get("/db/health", async (req, res) => {
    try {
        const result = await pool.query("SELECT 1 AS ok");
        res.json({ db: true, result: result.rows[0] });   
    } catch (err) {
        console.log(err);
        res.status(500).json({ db: false, error: "DB connection failed" })
    }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`API listening on http://localhost:${PORT}`);
});
