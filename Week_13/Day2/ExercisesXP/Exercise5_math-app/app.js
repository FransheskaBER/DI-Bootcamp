import _ from "lodash";
import { addition, multiplication } from "./math.js";

console.log(_.random(5, 95));


function rollDice(times){
    const results = [];

    for (let i=0; i<times; i++){
        const roll = _.random(1, 6);
        results.push(roll);
    }

    console.log(`🎲 Rolled ${times} times:`, results)
}
rollDice(5);

const additionOutcome = addition(34, 76);
console.log(`The result from the exported function addition is: ${additionOutcome}`);

const multiplicationOutcome = multiplication(45, 5);
console.log(`The result from the export multiplication function is ${multiplicationOutcome}`);


