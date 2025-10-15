import promptSync from "prompt-sync";
import { getWeather } from "./weather.js";
import readline from "readline";


// SOLUTION WITH PROMPT:

// const prompt = promptSync();
// while (true){
//     const userInput = prompt("Enter a city: ")
//     const regex = /^[A-Z][a-z]+$/;

//     if (regex.test(userInput)){
//         console.log("Outcome:")
//         getWeather(userInput);
//         break;
//     } else {
//         console.log("Make sure to enter a valid city name")
//     }
// }

// SOLUTION WITH READLINE:
// create UI to connect input and output
export function ask(question){
    const inter = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise (resolve => {
        // ask user a question:
        inter.question("Enter a city: ", (userInput) => {
            inter.close(); // alwasy close the interface after finishing
            resolve(userInput);
        });
    });
};

export async function main(){
    const regex = /^[A-Z][a-z]+$/;

    while (true) {
        const userInput = await ask("Enter a city: ");

        if (userInput !== "" & regex.test(userInput)){
            console.log("Outcome:")
            await getWeather(userInput);
            break;
        } else {
            console.log("Make sure to enter a valid city name")
        }
    }
}
