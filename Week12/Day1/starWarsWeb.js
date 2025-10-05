// Star Wars Web App Using AJAX API
// Last Updated: March 21st, 2025

// What you will learn
// async/await
// Fetch API


// What you will create
// Star Wars Web App Using AJAX API
// In this project you will have to build a single page application that uses AJAX to retrieve information and display it on your website as follows:

// Instructions
// You should use this API: https://www.swapi.tech/ to get the data and update it “randomly” in your website by clicking a button.
// Note: The API contains 83 different characters

// 1. Create your HTML file, and add the relevant elements.

// 2. In your JS file, create your functions :
// to retrieve the elements from the DOM.
// to get the data from the API (star wars characters).
// to display the info on the DOM: the name, height, gender, birth year, and home world of the character.

// 3. Display the data using AJAX. Make sure to display a loading message as follows:
// You can use any of these animation icons for the loading message.
// Fontawesome link :
// https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css

// 4. If there is an error getting the data, display a message as follows: "Oh no! That person isn't available"
// 5. You can use your own css to style the website as you see fit

const container = document.querySelector("#dataContainer");

const btn = document.querySelector("#btn");


btn.addEventListener("click", async () => {
    try {

        container.textContent = "";

        const icon = document.createElement("i");
        icon.classList.add("fa-solid", "fa-spinner", "fa-spin");
        const text = document.createTextNode("Loading...");
        container.append(icon, text);

        let randomId = Math.floor(Math.random()*83) + 1; // random number between 1-83

        const response = await fetch(`https://www.swapi.tech/api/people/${randomId}`);

        if (!response.ok) throw new Error("Oh No! That person isn't available");

        const data = await response.json();
        const character = data.result.properties;

        const homeResponse = await fetch(character.homeworld);
        const homeData = await homeResponse.json();
        const homeWorld = homeData.result.properties.name;

        container.textContent = "";

        const title = document.createElement("h3");
        title.textContent = character.name;

        const body = document.createElement("p")
        body.innerHTML = `
            Height: ${character.height}<br>
            Gender: ${character.gender}<br>
            Birth Year: ${character.birth_year}<br>
            Home World: ${homeWorld}
        `;

        container.appendChild(title);
        container.appendChild(body);
    

    } catch(error){
        container.textContent = "";

        const errorMsg = document.createElement("p");
        errorMsg.textContent = error.message;
        container.appendChild(errorMsg);
        console.error(error);
    }
});
