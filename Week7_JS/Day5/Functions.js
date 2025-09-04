// ---------------------------------
// FUNCTIONS//
// ---------------------------------

// Syntax Wihtout Parameters
function fntName(){
    //statements console.log or return code
}

// Syntax With parameters (Parameters are used when defining a function. A comma separate every parameter in the parentheses)
function myFunc(param1,param2, paramN){
    //statement console.log or return code
}

// Default Values you add them in the parameter itself with = sign, like:
function userInfo(userName, userAge=20) {
    console.log("My name is " + userName + ", my age is " + userAge);
}

userInfo("Fransheska")

// A function in JavaScript is like a reusable box of instructions that you can run whenever you need:
function sayHello(name) {
  console.log("Hello " + name + "!");
}
// Call (use) the function
sayHello("Fransheska"); // prints: Hello Fransheska!
sayHello("Yotam");      // prints: Hello Yotam!



// LOCAL VARIABLES
//---------------------
// A variable declared inside a function is only visible inside that function.
function userMoreInfo (userName, userAge) {
    let eyeColor = "blue"; //local variable 
    console.log("My name is " + userName + ", my age is "  + userAge + ", I have " + eyeColor + " eyes");
}
userMoreInfo("Sarah", 22); //My name is Sarah, my age is 22, I have blue eyes
// undefined in the global scope
// console.log(eyeColor); //Uncaught ReferenceError: eyeColor is not defined

// GLOBAL VARIABLES > They are variables created outside a function and they are visible from any function.



// RETURN
//--------------------
// When a function uses the keyword return, it sends a result back to wherever the function was called.
// You can then save that result in a variable or use it in another calculation:
function addNumbers(a, b) {
  return a + b;   // send the result back which is the sum of a and b
}
// create a variable and then you can Call the function and save the result of that function as the value of the variable created.
let sum = addNumbers(5, 3);
console.log(sum);  // prints: 8


// More Examples:
function squareNumber(number){
    return number * number;
}
let results = squareNumber(45)
console.log(results)

function greetings(name){
    return  `Welcome back, ${name}!`
}
let welcome = greetings("Mary")
console.log(welcome)

function letter(word){
    return  word[0]
}
let newLet = letter("Mary")
console.log(newLet)


// CLASS EXERCISES
// --------------------
function myAge(myage){
    let mumAge = myage * 2;
    let dadAge = Math.round(mumAge * 1.2);
    console.log(`My mum is ${mumAge} years old and my dad is ${(dadAge)}`);
}
myAge(33)


function ageAgain(mAge){
    return mAge * 2
}
let munA = ageAgain(33)
console.log(munA)


