// What is “scope”?

// Scope is the area in your code where a variable is visible and can be used.
// If a variable is out of scope, it’s invisible — like it doesn’t exist.

// FUNCTION SCOPE (with "var"):
// variables declared with var live only inside the entire function, not matter where in the function. Example:
function funcScopeWithVar() {
    console.log(x); // undefined (hoisted but not assigned yet)
    var x = 10;
    console.log(x); // 10
}
funcScopeWithVar();
console.log(x); // ERROR. this variable lives only inside the function funscopewithvar


// BLOCK SCOPE (with let/const):
// declared variables with let and const only live inside the closest {} block, like inside if, for or just {}
// you can't access them before declaration
{let y = 20;
    console.log(y); // 20
}
console.log(y); // ERROR. this variable y is block scoped

if (true) {
    const x = 30;
    console.log(z); // 30
}
console.log(z); // ERROR.


// REDECLARATION OF VARIABLES:
// with "var":
var a = 1;
var a = 2;
console.log(a) // 2

let c = 5;
let c = 4; // CANNOT REDECLARE
console.log(c); // EROR

// ACCESS BEFORE DECLARATION:
// with var you can access the variable before declaring it and asigning it but not with let and const
console.log(var1);
var var1 = "declare after" // hoisted (undefined)

console.log(let2);
let let2 = "undeclared" // ERROR



// DEFAULT PARAMETERS IN JS FUNCTIONS:
// Default parameters in JavaScript let you give a function argument a default value.
// If the caller doesn’t provide a value (or passes undefined), the default is used instead.
// Example:

function greet(name = "friend"){
    console.log("hello" + name);
}
greet(); // hello friend
greet("Louise"); // hello Louise

function mutipleParameter(a=1, b=1){
    return a*b;
}
console.log(mutipleParameter());      // 1
console.log(mutipleParameter(5));     // 5
console.log(mutipleParameter(5, 2)); // 10


// CONDITIONAL TERNARY OPERATOR:
// It's a shorcut way to write an if..else in JS
// syntax:
condition ? valueifTrue : valueifFalse

// Example:
// regular if-else:
let age = 20;
let canVote;
if (age >= 18){
    canVote = "yes"
} else {
    canVote = "no"
}
console.log(canVote); // yes

// ternary operator:
let age2 = 20;
let canVote2 = age2 >=18 ? "yes" : "no"
console.log(canVote2); // yes

// nested ternary:
let score = 85;
let grade = score >= 90 ? "A"
          : score >= 80 ? "B"
          : score >= 70 ? "C"
          : "F";
console.log(grade); // B

