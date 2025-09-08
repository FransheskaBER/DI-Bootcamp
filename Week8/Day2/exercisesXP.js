// Exercises XP

// What we will learn:
// Working with the DOM
// Event Handlers
// Forms


// 🌟 Exercise 1 : Change the article
// Instructions
// Using a DOM property, retrieve the h1 and console.log it.
// Using DOM methods, remove the last paragraph in the <article> tag.
// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

let h1 = document.getElementsByTagName("h1")[0];
console.log(h1);

h1.addEventListener("mouseover", () =>{
    let size = Math.floor(Math.random() * 101); //Random int from 0-100
    h1.style.fontSize = size + "px";
});

let article = document.getElementsByTagName("article")[0];
let allP = article.querySelectorAll("p");

let secondP = allP[1];
secondP.addEventListener("mouseover", () => {
    secondP.classList.add("fadeOut");
});

let lastP = allP[allP.length -1];
lastP.remove()

let h2 = document.getElementsByTagName("h2")[0];
h2.addEventListener("click", () => {
    h2.style.backgroundColor = "red";
});

let h3 = document.getElementsByTagName("h3")[0];
h3.addEventListener("click", () => {
    h3.style.display = "none";
});

let button = document.createElement("button");
button.textContent = "Click Me";
article.appendChild(button);

button.addEventListener("click", () => {
    allP.forEach(p => {
        p.style.fontWeight = "bold";
});
});


// 🌟 Exercise 2 : Work with forms
// Instructions
// Retrieve the form and console.log it.
// Retrieve the inputs by their id and console.log them.
// Retrieve the inputs by their name attribute and console.log them.
// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.

let form = document.querySelector("form");
console.log(form);

let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let submitBtn = document.getElementById("submit");
console.log(firstName);
console.log(lastName);
console.log(submitBtn);

let fN = document.querySelector('input[name="firstname"]');
let lN = document.querySelector('input[name="lastname"]');
console.log(fN);
console.log(lN);

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let userFirstName = firstName.value;
    let userLastName = lastName.value;

    if (userFirstName.trim() === "" || userLastName.trim() === "") {
        e.preventDefault(); // do not submit
        alert("First name and last name must be filled out");
        return; //stop the code down so empty lis wont be created
    }

    let ul = document.querySelector(".usersAnswer");
    
    let newLi = document.createElement("li");
    newLi.textContent = ('First Name: ' + userFirstName);

    let newLi2 = document.createElement("li");
    newLi2.textContent = ('Last Name: ' + userLastName);

    ul.appendChild(newLi);
    ul.appendChild(newLi2);
});



// 🌟 Exercise 3 : Transform the sentence
// Instructions
// Declare a global variable named allBoldItems.
// Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
// Create a function called highlight() that changes the color of all the bold text to blue.
// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.
// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example

let allBoldItems = [];

function getBoldItems(){
    let boldText = document.querySelectorAll("strong");
    allBoldItems = Array.from(boldText);
};

getBoldItems();

function highlight(){
    allBoldItems.forEach(item => { // since it is an array, style cannot be applied, i need a loop
        item.style.color = "blue";
    });
};

function returnItemsToDefault(){
    allBoldItems.forEach(item => {
    item.style.color = "black";
    });
};

allBoldItems.forEach(item => {
    item.addEventListener("mouseover", highlight);
    item.addEventListener("mouseout", returnItemsToDefault);
});


// 🌟 Exercice 4 : Volume of a sphere
// Instructions
// Write a JavaScript program to calculate the volume of a sphere.

let Myform = document.getElementById("MyForm");

Myform.addEventListener("submit", (e) => {
    e.preventDefault();
    let radius = document.getElementById("radius").value; // this gets the radius from the input
    radius = parseFloat(radius); // convert from string to number 

    let volume = (4/3) * Math.PI * Math.pow(radius, 3);    // formula to calculate volume
    document.getElementById("volume").value = volume  // you can add .toFixed(2) to keep just two decimals
});

