// Exercises XP Ninja

    // What we will learn:
    // Working with the DOM
    // Event Handlers
    // Forms

    // Exercise 1 : Calculate the tip
    // Instructions
    // Clone or Download this repository.
    // Follow the instructions below :
    // In this exercise you will calculate how much your tip would be after eating in a restaurant.

    // First Part :
    // Create a js file name main.js.
    // Create a function called calculateTip() that takes no parameter.
    // Create a variable called billAmount that fetches the value of the input, which id is billAmt (check the HTML file) –> It’s the amount of the bill.
    // Create a variable called serviceQuality that fetches the value of the input, which id is serviceQual (check the HTML file) –> It’s the quality of the service.
    // Create a variable called numberOfPeople that fetches the value of the input, which id is numOfPeople (check the HTML file) –> It’s the number of people sitting at the table.
    // Create a condition :
    // If serviceQuality is equal to zero, or billAmount is empty, alert the user to enter these values.
    // Create another condition after the first one :
    // If the input numberOfPeople is empty or is smaller than 1, set a default value of 1 to numberOfPeople and make sure that the tag which id is each, is not displayed (check the end of the HTML file).
    // Create a variable named total: the value should be ( billAmount * serviceQuality ) / numberOfPeople (the outcome is the average tip each person should pay)
    // Use the toFixed method to round total to two decimal points.
    // Add the CSS property “display:block” to the tag which id is totalTip.
    // Display the variable total in the tag which id is tip.

function calculateTip(){
    let billAmount = parseFloat(document.querySelector("#billamt").value);
    let serviceQuality = parseFloat(document.querySelector("#serviceQual").value);
    let numberOfPeople = parseInt(document.querySelector("#peopleamt").value)

    if (isNaN(serviceQuality) || serviceQuality === 0 || isNaN(billAmount) || billAmount <= 0){
        alert("Select how was your service and how many ppl are sharing the bill");
        return;
    }

    if (isNaN(numberOfPeople) || numberOfPeople < 1){
        numberOfPeople = 1
        const eachTag = document.querySelector("#each");
        eachTag.style.display = "none";
    }

    const total = ((billAmount*serviceQuality) / numberOfPeople).toFixed(2);

    const totalTip = document.querySelector("#totalTip");
    totalTip.style.display = "block";

    const tip = document.querySelector("#tip");
    tip.textContent = total;
    console.log(total);

};

// Second Part:
// To avoid displaying the total if the function calculateTip() is not called, add the CSS property “display:none” to the tag which id is totalTip.
// Call the function calculateTip() when the tag which id is calculate is clicked.
// Hint : use the method onclick.

const calBtn = document.querySelector("#calculate");
// calBtn.addEventListener("click", calculateTip);
calBtn.onclick = calculateTip;




// Exercise 2 : Validate the email
// Instructions
// We will create a form that ask the user for their email. Then, using a function we will check the validity of the user’s input.

// Add an input that has a type="email" to your form.
// Write your own javascript validation function to check if the entered value is a valid email address. The address should contain some valid characters,
// and the @ sign, more characters then a . (period) and some more characters.
// On “submit”, the validation function should run and validate the email address.
// Try to do this exercise twice : with and without regex.

let divForm = document.querySelector("#form");
divForm.textContent = "NEW FORM:"

let form = document.createElement("form");
let p = document.createElement("p");
p.textContent = "Enter your email "

let input = document.createElement("input");
input.type = "email";
input.placeholder = "name@example.com";

let submit = document.createElement("button");
submit.type = "submit";
submit.textContent = "Submit";

p.appendChild(input);
form.appendChild(p);
form.appendChild(submit);
divForm.appendChild(form);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// function withRegex(e){
//     e.preventDefault();

//     const value = input.value

//     if (emailRegex.test(value)){
//        let successText = document.createElement("p");
//        successText.textContent = `Email Submitted: ${value}`;
//        divForm.appendChild(successText);

//     } else {
//         alert("Enter a valid email")
//     }
// }

function withoutRegex(e){
    e.preventDefault();

    if (input.checkValidity()){
    let successText = document.createElement("p");
    successText.textContent = `Email Submitted: ${value}`;
    divForm.appendChild(successText);
} else {
    alert("Enter a valid email")
}};


submit.addEventListener("click", withoutRegex);



// Exercise 3 : Get the user’s geolocation coordinates
// Instructions
// Hint/tip

// Use HTML5 and Javascript for this exercise.
// Use everything we learned in class, and use all the resources linked in the course.
// This exercise is a bit tricky, search Google how to work with HTML5 and the navigator’s geolocation.
// Create a button
// For example, after the user clicks on the button, the output of your code should be as seen below :

// Latitude: 32.179346699999996
// Longitude: 34.871555

let locationdiv = document.querySelector("#location")

let getlocation = document.createElement("button");
getlocation.textContent = "Get Current Location"

locationdiv.appendChild(getlocation);

getlocation.addEventListener("click", () => {
    if (!navigator.geolocation){
        console.log("Geolocation is not supported by your browser");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            console.log(`Latitude: ${lat}\nLongitude: ${lon}`);
        },

        (error) => {
            if (error.code === 1){
                console.error("User denied the request for Geolocation.");
            } else if (error.code === 2){
                console.error("Location unavailable.");
            } else if(error.code === 3){
                console.error("Request timed out.");
            } else {
                console.error("Unknown error:", error.message);
            }
        }
    )
})









