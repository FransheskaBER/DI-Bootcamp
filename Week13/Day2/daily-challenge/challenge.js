import { greet } from "./greeting.js";
import { blue, red, yellow } from "./colorful-message.js";
import { readFile, readFilewithExtraWord } from "./files/read-file.js";

console.log("This is the greet function:")
console.log(greet("Matteo"));
console.log("These are the colorful messages:")
console.log(blue);
console.log(red);
console.log(yellow);
console.log("These are the exported functions:")
readFile();
readFilewithExtraWord("peace");

