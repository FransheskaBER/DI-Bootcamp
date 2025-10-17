let questions = [];
let currentQuestionIndex = 0;
let score = 0;

const question = document.getElementById("question");
const options = document.getElementById("options");
const feedback = document.getElementById("feedback");
const submit = document.getElementById("submitBtn");
const next = document.getElementById("nextBtn");
const final = document.getElementById("final");
const screen = document.getElementById("screen");

window.addEventListener("DOMContentLoaded", async() => {
    try {
        const response = await fetch("/api/questions");
        questions = await response.json();

        if (!Array.isArray(questions) || questions.length === 0){
            question.textContent = "No questions available";
            submit.disabled = true;
            return;
        }

        renderQuestionAndOptions();
    } catch(err) {
        question.textContent = "Failed to load questions";
        console.log(err);
    }
});

// render a question from backend (app.js) and displayed it in the front end as radio buttons (index.html):
function renderQuestionAndOptions(){
    const currentQuestion = questions[currentQuestionIndex];

    question.textContent = currentQuestion.text;
    feedback.textContent = "";
    next.disabled = true;

    // build radio options:
    options.innerHTML = ""; // clear previous options from previous question
    currentQuestion.choices.forEach((choice, index) => {
        const id = `option-${index}`;
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "choice";
        input.value = index;
        input.id = id;

        label.setAttribute("for", id);
        label.textContent = choice;

        const wrapper = document.createElement("div");
        wrapper.appendChild(input);
        wrapper.appendChild(label);

        options.appendChild(wrapper);
    });
}

submit.addEventListener("click", async() => {
    // read the selected radio
    const selected = new FormData(options).get("choice");
    if (selected === null){        // we are choising "null" because that's what FormData() returns when there is not value
        feedback.textContent = "Please choose an asnwer";
        return;
    }

    const choiceIndex = Number(selected);
    const questionId = Number(questions[currentQuestionIndex].id);

    try {
        const response = await fetch("/api/answer", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ questionId, choiceIndex })
        });

        if (!response.ok){
            const text = await response.text(); // the text() is a built in method of fetch() that returns regular text, so response.text() means “read whatever the server sent (like an error message) as plain text.”
            feedback.textContent = `Error: ${text}`;
            return;
        }

        const data = await response.json(); // { correct: boolean }
        if (data.correct){
            score += 1;
            feedback.textContent = "Correct";
        } else {
            feedback.textContent = "Incorrect";
        }

        // Allow moving on to the next quesiton:
        next.disabled = false;
    
    } catch(err){
        feedback.textContent = "Network error submitting answer";
        console.log(err);
    }
});

next.addEventListener("click", () => {
    currentQuestionIndex += 1;

    if (currentQuestionIndex >= questions.length){
        // show final
        screen.style.display = "none"; // hide question area
        final.style.display = "block"; // show final score area
        final.textContent = `Final score: ${score} / Total questions: ${questions.length}`
        return;
    }

    renderQuestionAndOptions();
});
