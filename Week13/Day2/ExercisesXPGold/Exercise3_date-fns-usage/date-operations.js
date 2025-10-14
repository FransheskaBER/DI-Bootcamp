// Exercise 3 : Working with Dates Using the date-fns Module
// Instructions
// Create a directory named date-fns-usage.

// Inside the date-fns-usage directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.

// Install the date-fns package by running npm install date-fns in the terminal. date-fns is a library for working with dates and times.

// Create a file named date-operations.js inside the date-fns-usage directory.

// In date-operations.js, require the date-fns package and perform the following operations:
// Get the current date and time.
// Add 5 days to the current date.
// Format the resulting date as a string.
// Display the formatted date in the terminal.

// Create a file named app.js in the same directory.

// In app.js, require the date-operations.js module and call the function you’ve written to perform and display the date operations.

// Run app.js using Node.js and verify that the formatted date is displayed in the terminal.

import { addDays, format } from "date-fns";

export function getDateAndTime(){
    const timeNow = new Date();
    const timeFormatted = format(timeNow, "HH:mm:ss");
    const today = format(new Date(), "MMMM do, yyyy"); 
    // const today = format(new Date(), "yyyy-MM-dd"); 
    console.log(`Today is ${today} and the time right now is ${timeFormatted}`);
}

export function getDateAfterFiveDays(){
    const today = new Date();
    const fiveDaysLater = addDays(today, 5);
    
    console.log(`Today is: ${format(today, "yyyy-MM-dd")}`);
    console.log(`In five days, it will be: ${format(fiveDaysLater, "yyyy-MM-dd")}`);
}


