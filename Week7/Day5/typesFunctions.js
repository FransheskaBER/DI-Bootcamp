// FUNCTION DECLARATION

function functionName(parameters){
    //code
}
// functionName(arguments)


//FUNCTION EXPRESSION
// You can create functions as variables, in that case the function name is the variable name. this are call ANONYMOUS
const funcName = function(parameters){
    //code
}
// funcName(arguments)


// ANONYMOUS FUNCTIONS
//------------------------------
// It's a function without a name. Create them when you don't need to reuse the function later. 
// These types of functions are common with method like .map(), .filter(), .forEach() where you pass a function as input

// Named function
// function triple(num) {
//   return num * 3;
// }
// // console.log(double(4)); // 8

// // Anonymous function (same thing, but no name)
// let y = function(num) {
//   return num * 2;
// };
// // console.log(double(4)); // 8

// // Example with map:
// let numbers = [1, 2, 3];
// let x = numbers.map(function(n) {
//   return n * 2;
// });
// console.log(d2); // [2, 4, 6]



// ARROW FUNCTIONS (ES6)
// --------------------------------
//  (shorter anonymous functions):
// let double = numbers.map(n => n * 2);
// console.log(double); // [2, 4, 6]
// the arrow is like an implicit return

// if you have a single parameter, you can skip () and just x
function add(a, b){
    return a+b;
}
console.log(add(3, 23));

let add2 = (a, b, c) => a+b+c
console.log(add2(34, 45, 23))

// if you dont have any parameter, use this:
let username = "john"
const fixedName = () => username.toUpperCase();
console.log(fixedName())

// CLASS EXERCISES
//-----------------------------------
let calculator = (a, b, operator) => {
    if (operator === "+"){
        return a+b;
    } else if (operator === "*"){
        return a*b;
    } else if (operator === "-"){
        return a-b;
    } else if (operator === "/"){
        return a/b;
    } else {
        return "Invalid operator";
    }
}
console.log(calculator(23, 45, "*"))

// same code but shorten syntax:
let calculator2 = (a, b, operator) => {
    operator === "+" ? a + b :
    operator === "-" ? a - b :
    operator === "*" ? a * b :
    operator === "/" ? a / b :
    "Invalid operator";
};


