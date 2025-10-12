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


