// task2:
import chalk from "chalk";
export function greetings(){
    console.log(chalk.blue("MY NAME IS BLUE!"));
    console.log(chalk.red("Hi, I am Red"));
    console.log(chalk.yellow("Buenos dias! Yo soy Yellow"));
}
// code in app2.js:
// import { greetings } from "./colorful-message.js";
// greetings();
// code in task1:
// "greeting.js":
// export function greet(name){
//     return `Welcome back ${name.toUpperCase()}!!!`
// }
// "app1.js" file:
// import { greet } from "./greeting.js";
// console.log(greet("Nicolas"));
// code in challenge.js file (challenge task):
// import { greet } from "./greeting.js";
// import { greetings } from "./colorful-message.js";
// import { readFile } from "./files/read-file.js";
// console.log("This is the greet function:")
// console.log(greet("Matteo"));
// console.log("These are the colorful messages:")
// greetings();
// console.log("These is the readfile function:")
// readFile();



