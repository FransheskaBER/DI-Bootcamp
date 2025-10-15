// 🌟 Exercise 2: Advanced Module Usage using ES6 module syntax
// Instructions
// Create a file named data.js.

// Inside data.js, define an array of objects, each representing a person with properties like name, age, and location.

// Export the array using the ES6 module syntax.

// Create another file named app.js.

// In app.js, import the array of person objects from the data.js module.

// Write a function that calculates and prints the average age of all the persons in the array.

// Use the imported array and the average age function in app.js.

// Run app.js and confirm that the average age is correctly calculated and displayed.

export const people = [
  { name: "Alice", age: 25, location: "New York" },
  { name: "Bob", age: 30, location: "London" },
  { name: "Charlie", age: 22, location: "Paris" },
  { name: "Diana", age: 27, location: "Berlin" },
  { name: "Ethan", age: 35, location: "Tokyo" },
  { name: "Fiona", age: 29, location: "Madrid" },
  { name: "George", age: 40, location: "Toronto" },
  { name: "Hannah", age: 24, location: "Rome" },
  { name: "Ian", age: 32, location: "Sydney" },
  { name: "Julia", age: 28, location: "Amsterdam" }
];


// code from app.js file:
// import {people} from "./data.js"

// function avgAge(){
//     let sumAges = 0;
//     for (const person of people){
//         sumAges += person.age;
//     }

//     const averageAge = sumAges/people.length;
//     console.log(`The average age of all the persons in the array is: ${averageAge.toFixed(0)} years old`);
// }

// avgAge();


// import { readFile, writeFile } from "./fileManager.js";
// const content = readFile("helloWorld.txt");
// console.log(content);

// writeFile("byeWorld.txt", "Writing to the file");
// console.log(readFile("byeWorld.txt"));
