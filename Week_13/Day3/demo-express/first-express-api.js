import express from "express";

const app = express();

app.listen(3000, () => {
    console.log("The server is running on port 3000");
})

app.get("/api/greetings", (req, res) => {
    res.json([
        {message: "Welcome to my first API express"}
    ])
})