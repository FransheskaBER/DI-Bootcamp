// code from data.js file:
// export const people = [
//   { name: "Alice", age: 25, location: "New York" },
//   { name: "Bob", age: 30, location: "London" },
//   { name: "Charlie", age: 22, location: "Paris" },
//   { name: "Diana", age: 27, location: "Berlin" },
//   { name: "Ethan", age: 35, location: "Tokyo" },
//   { name: "Fiona", age: 29, location: "Madrid" },
//   { name: "George", age: 40, location: "Toronto" },
//   { name: "Hannah", age: 24, location: "Rome" },
//   { name: "Ian", age: 32, location: "Sydney" },
//   { name: "Julia", age: 28, location: "Amsterdam" }
// ];
import {people} from "./data.js"

function avgAge(){
    let sumAges = 0;
    for (const person of people){
        sumAges += person.age;
    }

    const averageAge = sumAges/people.length;
    console.log(`The average age of all the persons in the array is: ${averageAge.toFixed(0)} years old`);
}

avgAge();


import { readFile, writeFile } from "./fileManager.js";
const content = readFile("helloWorld.txt");
console.log(content);

writeFile("byeWorld.txt", "Writing to the file");
console.log(readFile("byeWorld.txt"));


