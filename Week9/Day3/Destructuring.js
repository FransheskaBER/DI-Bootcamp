// DESTRUCTURING ASSIGNMENT
    // Unpacks values from arrays or properties from objects and assign them directly into variables in a shorted way
    // Works with arrays based on positions(index)
    // works with objects based on property names(keys)
    // let's you skip items or give default values


// EXAMPLE:

const numbers = [10, 20, 30];

// the normal way, would be:
const a = numbers[0]; // 10
console.log(numbers[1]); // 20

// the destructurin way, would be:
const [x, y] = numbers;
console.log(x); // 10
console.log(y); // 20




const user = {
    name: "Ana",
    age: 25
};

// the normal way:
const name1 = user.name; // "Anna"
const age1 = user.age; // 25

// the destructing way:
const {name, age} = user;
console.lof(name); // "Anna"
console.log(age); // 25


// SKIPPING AND DEFAULTS:
const colors = ["red", "green"];

// Skip the first
const [, second] = colors;
console.log(second); // "green"

// Default if missing
const [first, , third = "blue"] = colors;
console.log(third); // "blue"


// 🔑 How renaming works

// When you destructure an object, you can rename the variable using the syntax:

// const { key: newVariableName } = object;


// key → property name in the object

// newVariableName → variable name you want to use