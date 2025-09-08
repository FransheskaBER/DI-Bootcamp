// Daily challenge: Tell the story

// What You will learn :
// Use the DOM and Forms

// Instructions
// In todays exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with
// different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose,
// and sometimes the story is surprisingly funny.

// Follow these steps :
// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.
// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed
// (but keep the values entered by the user). The user could click the button at least three times and get a new story.
// Display the stories randomly.

let form = document.getElementById("libform");

let span = document.getElementById("story")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let noun = document.getElementById("noun").value.trim();
    let adjective = document.getElementById("adjective").value.trim();
    let person = document.getElementById("person").value.trim();
    let verb = document.getElementById("verb").value.trim();
    let place = document.getElementById("place").value.trim();
    
    if (!noun || !adjective || !person || !verb || !place) {
        e.preventDefault();
        alert("All fields are required");
        return; //stop here
    }

    span.textContent = `${person} grabbed a ${adjective} ${noun} and ran to ${place} to ${verb}.`
});





