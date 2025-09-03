//-------------------------
//  VAR, LET, CONST
// ------------------------

// CONST > once you assigned a value to a variable, then you cannot change that value. you can reassigned values to variables created by LET and VAR only.
// LET vs VAR > use instead of VAR to create variables

// You cannot access them outside of a function, so if you create a function and inside the funciton you create a variable with either of those 3, you will
// get an undefined error if you want to access that variable or its value outside the function.

// if you use CONST or LET to create a variable inside a function or code block, you won't be able to print it outside that code block. If you want to create a variable
// and access it outside that code scope, then use VAR. See example below:
function listFruits () {
    if(true) {
        const fruit1 = "orange"; //it exists in block scope
        let fruit2 = "avocado"; //it exists in block scope
        var fruit3 = "banana"; // it exists in function scope
    }

    // console.log(fruit1); GET AN ERROR
    // console.log(fruit2); GET AN ERROR
    // console.log(fruit3); WILL PRINT "BANANA"
}

// listFruits(); PRINTS "BANANA"




// ------------------------
// FUNCTIONS
// ------------------------
// syntax:
// function functionName(parameter){
//     console.log.
//     or
//     return code
// }

// A function in JavaScript is like a reusable box of instructions that you can run whenever you need:
function sayHello(name) {
  console.log("Hello " + name + "!");
}
// Call (use) the function
sayHello("Fransheska"); // prints: Hello Fransheska!
sayHello("Yotam");      // prints: Hello Yotam!


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

// ANONYMOUS FUNCTIONS
// It's a function without a name. Create them when you don't need to reuse the function later. 
// These types of functions are common with method like .map(), .filter(), .forEach() where you pass a function as input

// Named function
// function double(num) {
//   return num * 2;
// }
// console.log(double(4)); // 8

// Anonymous function (same thing, but no name)
// let double = function(num) {
//   return num * 2;
// };
// console.log(double(4)); // 8

// Example with map:
// let numbers = [1, 2, 3];
// let double = numbers.map(function(n) {
//   return n * 2;
// });
// console.log(d2); // [2, 4, 6]

// // ARROW FUNCTIONS (shorter anonymous functions):
// let double = numbers.map(n => n * 2);
// console.log(double); // [2, 4, 6]





// ------------------------
// LET KEYWORD
// ------------------------
let mango = "yellow"
if (mango === "yellow"){
  let mango = "blue"
  console.log(mango) //   overwrite the mango value but only inside the function so prints BLUE inside the function but not outside
}
console.log(mango) // prints YELLOW

var kiwi = "yellow"
if (kiwi === "yellow"){
  var kiwi = "blue"
  console.log(kiwi) //  overwrite the original value inside and outside the function so it prints BLUE
}
console.log(kiwi) // prints BLUE




// ------------------------
// DOM
// ------------------------

// DOM = a tree structure of HTML elements.
// Root node → the top of the tree (in browsers, usually <html>).
// Child node → an element inside another element (e.g. <li> inside <ul>).
// Leaf node → elements at the bottom with no children (e.g. <p> with only text inside).


// Example HTML:

// <html>   <!-- root -->
//   <body>   <!-- child of <html> -->
//      <ul>   <!-- child of <body> -->
//          <li>Apple</li>   <!-- leaf (no children) -->
//          <li>Mango</li>   <!-- leaf -->
//      </ul>
//   </body>
// </html>

let items = document.querySelectorAll("li")
items[2].textContent = "Banana"; // changes the 3rd item of the list in li (Egg)