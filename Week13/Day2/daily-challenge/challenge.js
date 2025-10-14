// Challenge Task: Integrating Everything

// Create a file named challenge.js.

// In challenge.js, require the modules from the previous tasks: greeting.js, colorful-message.js, and read-file.js.

// Use the greet function to greet the user, display the colorful message, and read and display the file’s content.

// Run challenge.js using Node.js and see the complete challenge in action.

import { greet } from "./task1/greeting.js";
import { greetings } from "./task2/colorful-message.js";
import { readFile, readFilewithExtraWord } from "./task3/read-file.js";

console.log("This is the greet function:")
console.log(greet("Matteo"));

console.log("These are the colorful messages:")
greetings();

console.log("These are the exported functions:")
readFile();
readFilewithExtraWord("peace");

