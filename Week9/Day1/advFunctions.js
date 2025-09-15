// FUNCTIONS EXPRESSION (assigned to variables):
// A function expression is when you create a function and assign it to a variable.
// Instead of naming it directly (function sayHi(){}), you store it in a variable. Examples:
const sayHi = function() {
    console.log("Hi!");
};

// function declaration:
function add(a, b){
    return a+b;
}
// function expression (assigned to variable):
const add = function (a, b){
    return a+b;
};
// both can be called like:
console.log(add(5, 5)); // 10

// you can use these functions when: pass functions like data, want anonyms functions (wihtout a name), when using callbacks
// telling anoter func "do this when finished", and when using modern JS featurs like arrow functions.

// functions declarations are hoisted, can be called before definining them
// functions expressions are not hoisted, you need to define them and then call them.




// NESTED FUNCTIONS (inside another main function):
// A nested function is simply a function inside another function.
// So:
// Outer function = “parent”
// Inner function = “child”
// The child can use variables from the parent, but the parent cannot see inside the child. Example:
function outer(){
    let outerLet = "I'm outside";
    function inner(){
        console.log("inner can see:", outerLet);
    }
    inner(); // call inner function
}
outer() // inner can see: I'm outside

// nested functions "remember" the variables from their parent
function parentCalculateTotal(price, quantity){
    function ChildAddTax(amount) { // amount = 20
        return amount * 1.15; // 15% tax > it return 20*1.15=23
    }
    return ChildAddTax(price * quantity); // call the child function with this amount: 10 * 2 = 20
}
console.log(parentCalculateTotal(10, 2)); // 23



// CLOSURES FUNCTIONS:
// A closure happens when a function “remembers” and keeps access to the variables from the place where
//  it was created — even after that outer function has finished running. Examples:

// Normal nested function (here inner runs only while outer is running):
function outer() {
    let count = 0;
    function inner() {
        count++
        console.log(count);
    }
    inner() // log 1
    inner() // log 2
}
outer(); // 1, 2

//closure (inner returned and used later)
function outer2(){
    let count = 0;
    function inner2(){
        count++;
        console.log(count);
    }
    return inner2; // return the function itself =
}
const counter = outer(); // outer finishes, but inner "remembers" count
counter();
counter();
counter();

//ANOTHER EXAMPLE:
function makeMultiplier(factor) {        // Define a function that takes one argument: 'factor'.
  return function(num) {                 // Return a new function that takes 'num' when called later.
    return num * factor;                 // Use both 'num' (from the call) and 'factor' (remembered).
  };                                     // <-- This inner function forms a closure over 'factor'.
}

const double = makeMultiplier(2);        // Call factory with factor=2. 
                                         // 'double' is now a function that remembers factor=2.

const triple = makeMultiplier(3);        // Call factory with factor=3.
                                         // 'triple' is now a function that remembers factor=3.

console.log(double(5)); // 10            // Invoke 'double': num=5 → 5 * remembered 2 = 10
console.log(triple(5)); // 15            // Invoke 'triple': num=5 → 5 * remembered 3 = 15

// When makeMultiplier(2) finishes, its local variable factor would normally disappear.
// But the returned inner function keeps a reference to that factor. That “remembering” is the closure.
// Each call to makeMultiplier creates a new private factor (so double and triple don’t interfere with each other).

// Arrow version (same closure behavior)
const makeMultiplier2 = (factor) => (num) => num * factor;
const times5 = makeMultiplier2(5);
console.log(times5(3)); // 15




// CURRIED FUNCTIONS:
// A curried function is a function that takes one argument at a time and returns a new function for the next
// argument, and so on, until it has everything it needs and returns a result. It uses closures to “remember”
// earlier arguments between calls.

// Remembers earlier answers: Each step returns a new function that remembers prior inputs (closure).

// EXAMPLE:

const addTax1 = (rate) => { // OUTER function that defines addTax as a curried function that takes rate as an parameter and returns sth
  return (amount) => { // This is the INNER function (no name/anonymous) that takes amount as paramter/argument
    return amount * (1 + rate); // the inner function closes over "rate" it remmebers it, uses "rate" from OUTER (closure)
  };
};

// arrow function:
const addTax = rate => amount => amount * (1 + rate);

const addVat = addTax(0.17); // call addTax with rate = 0.17. Now addVat functions expects only an amount now
console.log(addVat(100)); //call the remembered function (that has rate = 0.17) with a paramter of amount = 100, hence:
// Computes 100 * (1 + 0.17) = 100 * 1.17 = 117.



