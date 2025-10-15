import chalk from "chalk";

export function greetPerson(name){
    console.log(chalk.blue(`Hello, I'm ${name}`));
    console.log(chalk.yellow(`Hello, I'm ${name}`));
    console.log(chalk.red(`Hello, I'm ${name}`));
}



