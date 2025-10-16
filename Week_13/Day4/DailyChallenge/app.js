import express from "express";                        // import Express (ES Modules syntax)
import path from "path";                              // path utilities to resolve static files
import { fileURLToPath } from "url";                  // needed to emulate __dirname in ESM

const app = express();                                // create an Express app
const PORT = 5000;                                    // port to listen on

// ----- middleware -----
app.use(express.json());                              // parse application/json bodies
app.use(express.urlencoded({ extended: true }));      // parse URL-encoded form bodies

// ----- serve index.html and script.js from this folder -----
const __filename = fileURLToPath(import.meta.url);    // convert module URL to a file path
const __dirname = path.dirname(__filename);           // get the directory of this file
app.use(express.static(__dirname));                   // serve static files (index.html, script.js)

// ----- ultra-simple game endpoint -----
// Receives: { guess: string, correctAnswer: string }
// Responds: { message: string } → "Correct!" or "Wrong!"
app.post("/game", (req, res) => {
  const { guess, correctAnswer } = req.body;          // read JSON body

  if (!guess || !correctAnswer) {                     // basic validation
    return res.status(400).json({ message: "Missing guess or correctAnswer" });
  }

  // Compare user's choice vs. provided correct answer
  const ok = guess === correctAnswer;                 // boolean match
  const message = ok
    ? "✅ Correct!"
    : `❌ Wrong! The correct answer was "${correctAnswer}".`; // simple feedback

  res.json({ message });                              // send back the result
});

// ----- start server -----
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`); // helpful startup log
});


