let score = 0;
let emojisObj = []
let currentIndex = 0;

const emoji = document.getElementById("emoji");  
const options = document.getElementById("options");
const feedback = document.getElementById("feedback");
const submit = document.getElementById("submitBtn");
const next = document.getElementById("nextBtn");
const final = document.getElementById("final");
const mainScreen = document.getElementById("mainScreen")  

window.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("/api/emojis");
        emojisObj = await response.json();

        if (!Array.isArray(emojisObj) || emojisObj.length === 0){
            emoji.textContent = "No question available";
            submit.disabled = true;
            return;
        }

        showEmojiAndOptions();

    } catch (err){
        emoji.innerHTML = "Failed to load question";
        console.log(err);
    }
});

function showEmojiAndOptions(){
    options.innerHTML = "";
    const currentEmoji = emojisObj[currentIndex];
    
    emoji.textContent = currentEmoji.emoji;

    currentEmoji.options.forEach((option, index) => {
        const optionIndex = `option-${index}`;

        const label = document.createElement("label");
        const input = document.createElement("input");
        
        input.type = "radio";
        input.name = "option";
        input.value = index;
        input.id = optionIndex;

        label.setAttribute("for", optionIndex);
        label.textContent = option;

        const wrapper = document.createElement("div");
        wrapper.appendChild(input);
        wrapper.appendChild(label);

        options.appendChild(wrapper);
    }); 
}

submit.addEventListener("click", async() => {
    const selectedOption = new FormData(options).get("option");

    if (selectedOption === null){        // we are choising "null" because that's what FormData() returns when there is not value
        feedback.textContent = "Please choose an asnwer";
        return;
    }

    const choiceIndex = Number(selectedOption); // we get the value of this input (name: option / value: index)
    const emojiId = Number(emojisObj[currentIndex].id);

    try {
        const response = await fetch("/api/answer", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ emojiId, choiceIndex })
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
    }catch (err){
        feedback.textContent = "Network error submitting answer";
        console.log(err);
    }
});

next.addEventListener("click", async () => {
    currentIndex += 1;
    feedback.textContent = "";
    next.disabled = true;

    if (currentIndex >= emojisObj.length){
        // show final
        mainScreen.style.display = "none"; // hide question area
        final.style.display = "block"; // show final score area
        final.textContent = `Final score: ${score} / Total questions: ${emojisObj.length}`
        return;
    }

    showEmojiAndOptions();
});


