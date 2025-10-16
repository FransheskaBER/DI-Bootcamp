const emojis = [
  { emoji: "😀", name: "grinning face" },                     
  { emoji: "😂", name: "face with tears of joy" },            
  { emoji: "😍", name: "smiling face with heart-eyes" },
  { emoji: "🤔", name: "thinking face" },
  { emoji: "😎", name: "smiling face with sunglasses" },
  { emoji: "🥳", name: "partying face" },
  { emoji: "😴", name: "sleeping face" },
  { emoji: "😡", name: "angry face" },
  { emoji: "😢", name: "crying face" },
  { emoji: "❤️", name: "red heart" }
];

const emojiEl = document.getElementById("randomEmoji");        // where the emoji character goes
const optionsEl = document.getElementById("optionsContainer");  // where the radio buttons go
const formEl = document.getElementById("gameForm");             // the form we submit

let currentCorrectAnswer = null;                                // we keep the correct name to send to server

// Fisher–Yates shuffle to randomize arrays (unbiased)
function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {                     // walk from end to start
    const j = Math.floor(Math.random() * (i + 1));             // pick random index 0..i
    [a[i], a[j]] = [a[j], a[i]];                               // swap
    }
    return a;                                                     // return shuffled copy
}

// Create one "round": pick a random emoji, build 3 distractors, render 4 radio options
function newRound() {
    // 1) pick a random emoji as the correct one
    const correctIndex = Math.floor(Math.random() * emojis.length);  // random index
    const correct = emojis[correctIndex];                            // the chosen emoji object
    currentCorrectAnswer = correct.name;                              // remember the correct name
    
    // 2) pick 3 distractors (different names)
    const pool = emojis.filter(e => e.name !== correct.name);        // everything but the correct one
    const distractors = shuffle(pool).slice(0, 3);                   // take any 3 from the shuffled pool

    // 3) build the 4 options (names only) and shuffle them
    const options = shuffle([correct.name, ...distractors.map(d => d.name)]); // array of strings

    // 4) render emoji
    emojiEl.textContent = correct.emoji;                              // show big emoji

    // 5) render options as radio buttons
    optionsEl.innerHTML = "";                                         // clear previous
    options.forEach((name) => {
        const label = document.createElement("label");                  // one label per line
        const input = document.createElement("input");                  // radio input
        input.type = "radio";                                           // single-choice control
        input.name = "emoji";                                           // same name groups the radios
        input.value = name;                                             // value we will submit
        input.required = true;                                          // force user to pick one

        label.appendChild(input);                                       // add input to label
        label.appendChild(document.createTextNode(" " + name));         // readable option text
        optionsEl.appendChild(label);                                   // add to container
    });
}

// Handle form submit with fetch → POST /game
formEl.addEventListener("submit", async (e) => {
    e.preventDefault();                                               // stop normal form navigation

    const data = new FormData(formEl);                                // read form values
    const guess = data.get("emoji");                                  // radios return a single string

    // Prepare the minimal payload that the server expects
    const payload = {
        guess,                                                           // user's choice (string)
        correctAnswer: currentCorrectAnswer                              // correct name we chose client-side
    };

    try {
        const res = await fetch("/game", {                                 // relative path (same origin)
            method: "POST",                                                // POST as requested
            headers: { "Content-Type": "application/json" },               // tell server it's JSON
            body: JSON.stringify(payload)                                  // send guess + correctAnswer
            });

        const json = await res.json();                                   // read server response { message }
        alert(json.message);                                             // show simple feedback (prompt requirement)

        formEl.reset();                                                  // clear the selection
        newRound();                                                      // immediately show a new emoji round
    } catch (err) {
        console.error("Submit error:", err);                             // helpful console log for debugging
        alert("Something went wrong. Please try again.");                // basic error feedback
    }
});

// boot the first round on page load
newRound();                                                          // show first emoji + options


