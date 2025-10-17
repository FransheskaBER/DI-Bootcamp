import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = 5000;
const app = express();

app.use(express.json());
// Serve static files from the project root
app.use(express.static(__dirname));

// In-memory questions
const questions = [
  {
    id: 1,
    text: "What does HTTP stand for?",
    choices: ["HyperText Transfer Protocol", "High Transfer Text Protocol", "Host Transfer Type Process", "Hyperlink Text Tooling"],
    answerIndex: 0
  },
  {
    id: 2,
    text: "Which HTTP method is used to create a resource?",
    choices: ["GET", "POST", "PUT", "DELETE"],
    answerIndex: 1
  }
];

// get all questions
app.get("/api/questions", (req, res) => {
    // don't leak the correct answer to the client:
    const safeInfo = questions.map(question => ({
        id: question.id,
        text: question.text,
        choices: question.choices
    }));

    res.status(200).json(safeInfo);
});

// check an answer:
app.post("/api/answer", (req, res) => {
    const { questionId, choiceIndex } = req.body;

    // basic validation:
    if (typeof questionId !== "number" || typeof choiceIndex !== "number") return res.status(400).json({ error: "questionId and choiceIndex must be numbers" });

    const question = questions.find(question => question.id === questionId);
    if (!question) return res.status(404).json({ error: "Question Not Found" });

    const correct = question.answerIndex === choiceIndex; // correct is a raw boolean like "true" or "false"
    return res.status(200).json({ correct }); // we are adding the {} so it will send an object instead of a boolen , so sth like correct: true
});

app.listen(port, () => console.log(`Server running on port ${port}`));




