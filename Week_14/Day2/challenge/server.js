import express from "express";
import router from "./routes/appRoute.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use("/", router);
app.use(express.static(path.join(__dirname, "public")));

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

const PORT = 8080;
app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`));