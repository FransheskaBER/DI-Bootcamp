// GET DOMS:
const questionContainer = document.getElementById('question-container');
const feedbackContainer = document.getElementById('feedback-container');
const question = document.getElementById('question-text');
const optionsForm = document.getElementById('options');
const submitBtn = document.getElementById('submit');
const nextBtn = document.getElementById('next');
const feedback = document.getElementById('feedback');

let currentQuestion = 0;
let questionId = 0;
let score = 0;
let totalQuestions = 0;

window.addEventListener("DOMContentLoaded", async() => {
    await totalQ();
    await loadQuestionAndOptions(currentQuestion);
});

async function totalQ(){
    const res = await fetch(`/api/quiz/total`);
    if (!res.ok) {
        totalQuestions === 5;
        return;
    }
    const data = await res.json();
    totalQuestions = data.totalQuestions;
};

async function loadQuestionAndOptions(currentQuestion){
    try {
        const response = await fetch(`/api/quiz/${currentQuestion}`);
        if (!response.ok){
            questionContainer.innerHTML= 'No more available questions'
            submitBtn.style.display = "none";
            nextBtn.style.display = "none";
            return;
        }

        const data = await response.json();
        question.textContent = data.question;
        questionId = data.id;

        optionsForm.innerHTML = "";

        data.options.forEach(option => {
            const label = document.createElement('label');
            const input = document.createElement('input')

            input.type = 'radio';
            input.name = 'answer';
            input.value = option.id;

            label.textContent = option.text;
            label.prepend(input);
            
            const wrapper = document.createElement('div');
            wrapper.appendChild(label);
            optionsForm.appendChild(wrapper);
        });
    } catch (err){
        questionContainer.innerHTML= 'Failed at fetching question';
    }
};

submitBtn.addEventListener("click", async(e) => {
    e.preventDefault();

    const formData = new FormData(optionsForm);
    const optionId = formData.get("answer");
    if (!optionId){
        feedback.textContent = "Please select an option first";
        return;
    }

    try {
        const response = await fetch(`/api/quiz/answer`, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({ questionId , optionId })
        });

        if(!response.ok){
            feedback.textContent = 'Something went wrong when submitting your answer';
            return;
        }

        const data = await response.json();
        if (data.correct === true){
            feedback.textContent = "✅ Correct Answer";
            score++;
        } else {
            feedback.textContent = "❌ Wrong Answer";   
        }

        submitBtn.style.display = "none";
        nextBtn.style.display = "block";
    } catch (err) {
        feedback.textContent = 'Failed at fetching response'
    }
});

nextBtn.addEventListener("click", async() => {
    currentQuestion++;
    feedback.textContent = "";
    submitBtn.style.display = "block";
    nextBtn.style.display = "none";

    const isLastQuestion = currentQuestion + 1 >= totalQuestions;

    if (isLastQuestion){
        questionContainer.innerHTML = `Quiz finished! Your score is: ${score} - from a total number of ${totalQuestions} questions`;
        submitBtn.style.display = "none";
        nextBtn.style.display = "none";
        return;
    }
    
    await loadQuestionAndOptions(currentQuestion);
});


