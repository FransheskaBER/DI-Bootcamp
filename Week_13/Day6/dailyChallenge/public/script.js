const form = document.getElementById("quizForm");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const next = document.getElementById("nextBtn");
const finish = document.getElementById("finish");
const feedback = document.getElementById("feedback");

window.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("/quiz");
        const data = await response.json();
        // const responseObj = {
        //     question: currentQuestion ? currentQuestion.question : null,
        //     index,
        //     total: triviaQuestions.length,
        //     done
        // }
        if (!response.ok) question.textContent = "Couldn't load question";
        question.textContent = data.question;
    } catch(err){
        console.log(err);
        question.textContent = "Failed to fetch question"
    }
});

next.addEventListener("click", async () => {
    question.textContent = "";
    
    try {
        const formData = new FormData(form);
        const userAnswer = (formData.get("answer") || "").trim();
        if (!userAnswer) {
            feedback.textContent = "Please type an answer first.";
            return;
        }
        const response = await fetch("/quiz", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ answer: userAnswer })
        });

        // if (!response.ok) {
        //     const err = await response.json();
        //     throw new Error(err || "Submit failed");
        // }
        // if(!response.ok) question.textContent = "There was a problem submitting your answer and can't load next question";

        const data = await response.json(); // data: { correct, nextQuestion, index, total, done }

        if (data.done === true) {
            // quiz finished
            form.innerHTML = "All questions answer. To get score, finish quiz.";
            next.style.display = "none";
            finish.style.display = "block";
            return;
        }

        // quiz continues
        question.textContent = data.nextQuestion || "No next question.";
        answer.value = "";
        answer.disabled = false;
        answer.focus();
    } catch(err){
        console.log(err);
        question.textContent = "Failed to submit answer and next question"
    }
});

finish.addEventListener("click", async() => {
    try {
        const response = await fetch("/quiz/score");
        const data = await response.json();
        // const finalScore = {
        //     score: req.session.score,
        //     total: triviaQuestions.length
        // }
        if (!response.ok) feedback.textContent = "There was a problem retrieving your final score";
        feedback.textContent = "Your final score is " + data.score + "from a total answer of " + data.total;
    } catch(err){
        console.log(err);
        feedback.textContent = "Failed to fetch your final score";
    }
});





