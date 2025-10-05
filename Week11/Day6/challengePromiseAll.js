// Daily Challenge: Gifs
// Last Updated: March 21st, 2025

// What You will learn :
// Fetch Api
// Async/Await
// Try/Catch


// Instructions
// Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.

const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

let form = document.getElementById("gifForm");

const gifContainer = document.getElementById("gifContainer");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const category = document.getElementById("categoryInput").value.trim();

    if (!category){
        gifContainer.textContent = "Please enter a category";
        return;
    }

    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${category}&rating=g`)

        if (!response.ok){
            throw new Error(`HTTP error: status ${response.status}`);
        }

        const data = await response.json();
        
        const gifURL = data.data.images.original.url;
        const img = document.createElement("img");
        img.src = gifURL;
        img.classList.add("img")
        const deleteBTN = document.createElement("button");
        deleteBTN.textContent = "Delete GIF";

        const individualDiv = document.createElement("div");

        individualDiv.appendChild(img);
        individualDiv.appendChild(deleteBTN);
        
        gifContainer.appendChild(individualDiv);

        deleteBTN.addEventListener("click", () => {
            individualDiv.remove();
        });

    } catch(error){
        console.error("Error fetching GIF:", error);
        gifContainer.textContent = "Could not fetch GIF. Try again";
    }

});

const deleteAll = document.createElement("button");
deleteAll.textContent = "Delete All";
gifContainer.appendChild(deleteAll);

const images = document.querySelectorAll(".img");

deleteAll.addEventListener("click", () => {
    gifContainer.innerHTML = "";
});
