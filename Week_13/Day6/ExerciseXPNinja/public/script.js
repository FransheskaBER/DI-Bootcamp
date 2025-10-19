const form = document.getElementById("form");
const emojisContainer = document.getElementById("emojisContainer");
const feedback = document.getElementById("feedback");

let emojis = [];

window.addEventListener("DOMContentLoaded", async() => {
    try {
        const response = await fetch("/emojis")
        emojis = await response.json();

        if (emojis.length === 0){
            form.textContent = "Couldn't load emojis and input name"
        }

        emojis.forEach(emoji => {
            const option = document.createElement("option");
            option.value = emoji;
            option.textContent = emoji;

            emojisContainer.appendChild(option);
        });
    } catch (err) {
        form.textContent = "Failed fetching emojis";
        console.log(err);
    }
});

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const name = formData.get("userName");
    const emoji = formData.get("emojiName");

    const emojiIndex = Number(emojis.indexOf(emoji));

    if (!name || !emoji){
        feedback.textContent = "Please enter your name and select an emoji.";
        return;
    }

    try {
        const response = await fetch("/emojis/greet", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ emojiIndex: emojiIndex, name: name })
        });

        const data = await response.text();

        if (!response.ok){
            feedback.textContent = "soMETHING went wrong"
        }
        
        feedback.textContent = data;
    
    } catch (err) {
        console.log(err);
        feedback.textContent = "Failed to fetch response"
    }
});

