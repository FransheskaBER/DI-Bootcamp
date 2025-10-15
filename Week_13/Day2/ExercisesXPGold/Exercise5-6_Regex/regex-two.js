// Exercise 6 : Regular Expression #2
// Instructions
// Ask the user for his full name (example: “John Doe”), and use the regular expression module to check the validity of his answer:
// The name should contain only letters.
// The name should contain only one space.
// The first letter of each name should be upper cased.

import promptSync from "prompt-sync";

const prompt = promptSync();

while (true) {
    const userFullName = prompt("Enter your full name: ");
    const regexRule = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
    
    if (regexRule.test(userFullName)){
        console.log("Name submitted!");
        break;
    } else {
        console.log("Make sure to enter just a full name and last name both in title case")
    }
}
