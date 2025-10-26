import express from "express";
import tasksRouter from "./routes/tasksRoutes.js";

const app = express();

app.use(express.json());
app.use("/tasks", tasksRouter);

// 404 error handler for unknown routes
app.use((req, res) => {
    res.status(404).json({ error: "Route Not Found" });
})

app.use((e, req, res, next) => {
    console.log("Unhandled error: ", e);
    const status = e.status || 500;
    const message = e.message || "Internal Server Error";
    res.status(status).json({ error: message });
})

const PORT = 5500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



