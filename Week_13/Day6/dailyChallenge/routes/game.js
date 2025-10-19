import { Router } from "express";

const game = Router();

const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" },
];

// to keep track of the score per question:
const sessions = new Map(); // key: playerId -> value: { score: 0, index: 0 }

function ensureSession(req, res, next) {
  let { playerId } = req.cookies || {};

  if (!playerId) {
    playerId = Math.random().toString(36).slice(2); // simple id
    res.cookie("playerId", playerId, { httpOnly: true }); // <-- singular: cookie
    sessions.set(playerId, { score: 0, index: 0 });
  }

  // If server restarted or playerId unknown, initialize a fresh session
  if (!sessions.has(playerId)) {                    // <-- sessions (plural)
    sessions.set(playerId, { score: 0, index: 0 }); // <-- set, not get
  }

  req.session = sessions.get(playerId);
  req.playerId = playerId;
  next();
}

game.use(ensureSession);


// GET /quiz: Start the quiz and display the first question.
game.get("/", (req, res) => {
    // 1. Get current question index from session
    const { index } = req.session; // Pull index out of the session (comings from the cookie-parse)
    
    // 2. Find the question at that index
    let currentQuestion = triviaQuestions[index];

    // 3. Check if quiz is finished
    let done = false;
    if (currentQuestion === undefined) {
        done = true;
    }

    // 4. Build response object
    const responseObj = {
        question: currentQuestion ? currentQuestion.question : null,
        index,
        total: triviaQuestions.length,
        done
    }

    // 5. Send it back to the client
    return res.status(200).json(responseObj);
});

// POST /quiz: Submit an answer to the current question and move to the next question.
game.post("/", (req, res) => {
    const { answer } = req.body;
    const { index } = req.session;

    const currentQuestion = triviaQuestions[index];

    if (!currentQuestion) return res.status(400).json({ error: "Quiz already finished" });
    
    if (typeof answer !== "string") return res.status(400).json({ error: "Answer must be a string" });

    const correct = currentQuestion.answer.toLowerCase() === answer.toLowerCase();
    if (correct) req.session.score += 1;
    
    req.session.index += 1; // move to the next question

    // prepare next question info:
    const nextIndex = req.session.index;
    const nextQuestion = triviaQuestions[nextIndex];

    let nextQuestionText = null;
    let done = false;

    if (nextQuestion === undefined) {
        done = true;
    } else {
        nextQuestionText = nextQuestion.question;
    }
    
    // 6) Send response
    const responseObj = {
        correct: correct, 
        nextQuestion: nextQuestionText,
        index: nextIndex,
        total: triviaQuestions.length,
        done: done
    }
    
    return res.status(200).json(responseObj);
});

// GET /quiz/score: Display the user’s final score at the end of the quiz.
game.get("/score", (req, res) => {
    const finalScore = {
        score: req.session.score,
        total: triviaQuestions.length
    }
    res.status(200).json(finalScore);
});

export default game;
