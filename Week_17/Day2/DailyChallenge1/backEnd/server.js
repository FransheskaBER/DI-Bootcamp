import express from "express";
import cors from "cors";

const app = express();
const PORT = 5500;

app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
    res.status(200).json({ message: "Hello From Express" });
});

app.post("/api/world", (req, res) => {
    const { input } = req.body || {};
    if (typeof input !== "string" || input.trim() === "") {
        return res.status(400).json({ error: "Input must be a non-empty string" });
    }
    return res.status(201).json({ 
        message: `I received your POST request. This is what you sent me: ${input}`
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})
