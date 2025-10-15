import { readFile, writeFile } from "./fileManager.js";

console.log(readFile("helloWorld.txt"));
console.log(readFile("byeWorld.txt"));
console.log(writeFile("byeWorld.txt", "Writing to the file"));
console.log("New text:")
console.log(readFile("byeWorld.txt"));

