import { greet } from "./greeting.js";
import { greetings } from "./colorful-message.js";
import { readFile } from "./files/read-file.js";
console.log("This is the greet function:")
console.log(greet("Matteo"));
console.log("These are the colorful messages:")
greetings();
console.log("These is the readfile function:")
readFile();


