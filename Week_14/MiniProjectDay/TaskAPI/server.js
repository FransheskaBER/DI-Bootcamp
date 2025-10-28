import express from "express";
import router from "./routes/appRoute.js";

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use("/users", router);


app.use((err, req, res, next) => {
    console.error(err.stack);

    const status = err.status || 500;
    const message = err.message || "Network error";
    
    res.status(status).json({ error: message });
})

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
})

const PORT = 7700;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));