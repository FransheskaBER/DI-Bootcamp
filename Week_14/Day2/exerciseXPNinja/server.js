import express from "express";
import quizRoutes from "./routes/quizRoutes.js";

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.get('/health', (req, res) => {
    res.status(200).json({ ok: true });
});

app.use('/api/quiz', quizRoutes);

// 404 error handler for unknown routes
app.use((req, res) => {
    res.status(404).json({ error: "Not Found" });
});

// centralized error handler
app.use((err, req, res, next) => {
    console.log("Unhandled error:", err);
    const status = err.status || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ error: message });
});


const PORT = 3300;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
