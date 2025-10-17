import express from "express";
import axios from "axios";

const app = express();
app.use(express.json());
app.listen(5000, () => console.log("Server listening on port 5000"));

app.get("/api/posts", async (req, res) => {
    try {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
        res.status(200).json(data);
    } catch (err) {
        const status = err.response?.status || 500;
        const message = err?.message || "Something went wrong";
        res.status(status).json( {error: message});
    }
});

app.get("/api/posts/:id", async (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).send("Invalid ID");

    try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        res.status(200).json(data);
    } catch (err) {
        if (err.response?.status === 404) return res.status(404).json( {error: "Post Not Found" });
        const status = err.response?.status || 500;
        const message = err.response?.message || "Failed to fetch post";
        res.status(status).json({ error: message });
    }
});

app.post("/api/posts", async (req, res) => {
    const { title, body, userId } = req.body;
    if (!title || !body || !userId) return res.status(400).send("Title/Body/UserId Required");
    
    try {
        const { data } = await axios.post("https://jsonplaceholder.typicode.com/posts", req.body);
        res.status(201).json(data);
    } catch(err){
        // console.log("Error object:", err);
        // console.log("Error keys:", Object.keys(err));
        const status = err.response?.status || 500;
        const message = err.response?.data || err.message || "Failed to create post";
        res.status(status).json({ error: message });
    }
});

app.put("/api/posts/:id", async (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).send("Invalid ID");
    
    const { title, body, userId } = req.body;
    if (!title || !body || !userId) return res.status(400).send("Title/Body/UserId required");

    try {
        const { data } = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, req.body);
        res.status(200).json(data);
    } catch(err){
        const status = err.response?.status || 500;
        const message = err.response?.data || err.message || "Failed to update post";
        res.status(status).json({ error: message });
    }
});

app.delete("/api/posts/:id", async (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).send("Invalid ID");

    try {
        const { data } = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        res.status(200).json(data);
    } catch(err){
        const status = err.response?.status || 500;
        const message = err.response?.data || err.message || "Failed to delete post";
        res.status(status).json({ error: message });
    }
});

