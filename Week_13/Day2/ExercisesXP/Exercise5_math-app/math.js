// 🌟 Exercise 5: Creating and Using a Custom Module
// Instructions
// Create a directory named math-app.

// Inside the math-app directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.

// Install the lodash package, a utility library, by running npm install lodash in the terminal.

// Create a file named math.js inside the math-app directory.

// In math.js, define a simple custom module that exports functions for addition and multiplication.

// Create a file named app.js in the same directory.

// In app.js, require the lodash package and the custom math module.

// Use the exported functions from the math module and the utility functions from the lodash package to perform calculations.

// Run app.js using Node.js and verify that the calculations are correct.

export function addition(a, b){
    return a + b;
}

export function multiplication(a, b){
    return a * b;
}


// code in app.js file:
// import _ from "lodash";
// import { addition, multiplication } from "./math.js";

// console.log(_.random(5, 95));


// function rollDice(times){
//     const results = [];

//     for (let i=0; i<times; i++){
//         const roll = _.random(1, 6);
//         results.push(roll);
//     }

//     console.log(`🎲 Rolled ${times} times:`, results)
// }
// rollDice(5);

// const additionOutcome = addition(34, 76);
// console.log(`The result from the exported function addition is: ${additionOutcome}`);

// const multiplicationOutcome = multiplication(45, 5);
// console.log(`The result from the export multiplication function is ${multiplicationOutcome}`);