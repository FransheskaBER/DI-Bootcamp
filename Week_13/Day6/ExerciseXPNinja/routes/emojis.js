import express from "express";

const emojisRoute = express.Router();

// // List of available emojis
const emojis = ["😀", "🎉", "🌟", "🎈", "👋"];

// - GET /: Display a form where users can enter their name and choose an emoji from a list.
emojisRoute.get("/", (req, res) => {
    res.status(200).json(emojis);
});

// - POST /greet: Process the form submission and generate a personalized greeting with the selected emoji.
emojisRoute.post("/greet", (req, res) => {
    const { emojiIndex, name } = req.body;
    if (typeof emojiIndex !== "number" || typeof name !== "string") return res.status(400).send("Emoji index must be a number and name must be a string");

    const selectedEmoji = emojis[emojiIndex];
    res.status(201).send(`Welcome ${name}, you have selected emoji ${selectedEmoji}`);
});

export default emojisRoute;