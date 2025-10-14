// Task 2: Using an NPM Module

// Inside the daily-challenge directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.

// Install the chalk package by running npm install chalk in the terminal.

// Create a file named colorful-message.js.

// In colorful-message.js, require the chalk package and use it to create and display a colorful message in the terminal.

// Create another file named app.js.

// In app.js, require the colorful-message.js module and call the function you’ve written to display the colorful message.

// Run app.js using Node.js and see the colorful message.

import chalk from "chalk";

export function greetings(){
    console.log(chalk.blue("MY NAME IS BLUE!"));
    console.log(chalk.red("Hi, I am Red"));
    console.log(chalk.yellow("Buenos dias! Yo soy Yellow"));
}


