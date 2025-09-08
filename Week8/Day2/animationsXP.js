// Exercises XP : Animations

// What we will learn:
// DOM Manipulation
// Animation with the DOM

// 🌟 Exercise 1: Timer
// Instructions

// // Part I
// // In your Javascript file, using setTimeout, call a function after 2 seconds.
// // The function will alert “Hello World”.
// function sayHello(){
//     alert("Hello World!");
// }
// setTimeout(sayHello, 2000);

// // Part II
// // In your Javascript file, using setTimeout, call a function after 2 seconds.
// // The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// function newPara(){
//     let newPara = document.createElement("p");
//     newPara.textContent = "Hello World";
//     let div = document.getElementById("container");
//     div.appendChild(newPara);
// }
// setTimeout(newPara, 2000)

// // Part III
// // In your Javascript file, using setInterval, call a function every 2 seconds.
// // The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// // The interval will be cleared (ie. clearInterval), when the user will click on the button.
// // Instead of clicking on the button, the interval will be cleared (ie. clearInterval)
// // as soon as there will be 5 paragraphs inside the <div id="container">.

// let div = document.getElementById("container");

// let interval = setInterval(() => {
//     let counterp = document.querySelectorAll("p").length;
    
//     if (counterp > 5){
//         clearInterval(interval);
//         return
//     }
    
//     let newPara = document.createElement("p");
//     newPara.textContent = "Hello World";
//     div.appendChild(newPara);

// }, 2000);




// 🌟 Exercise 2 : Move the box
// Instructions
// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, 
// when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of 
// the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions

function myMove(){
    let container = document.getElementById("container");
    let animate = document.getElementById("animate");
    position = 0

    // how far to the right it can go (container width - box width)
    let maxRight = container.offsetWidth - animate.offsetWidth;

    let interval = setInterval(() => {
        if (position >= maxRight){
            clearInterval(interval);
        } else{
            position++;
            animate.style.left = position + "px";
        }
    }, 5)  // run every 5ms for smooth motion
}

