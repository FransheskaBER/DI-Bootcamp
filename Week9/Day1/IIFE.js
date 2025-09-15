// What is immediately invoked function expression (IIFE)?

// it's a function that you defined and run inmeditaly all in one go

// it's used when you want to run code ONCE - no reuse
// isolate variable so you dont have variable that affect/pollute the global scope
// since they isolate varible means that they keep the variables hidden inside the function, 
//  hence it creates a private scope

// EXAMPLE:

// regular function:
function sayHello() {
    console.log("Hello!");
}

// IIEF function:
(function() {
    console.log("Hello!");
})();

// so you wrap the function with () and right after that add another () to call inmeditale.



// Now devs rraely use IIEFs to create private scope, they instead use "let" and "const" to
// inside blocks {} or modules to create a privare scope.

// Devs still use IIEF in modern fucntions arrows like:

// EXAMPLES:
// this is the old-school IIEF
(function() {
  var secret = "pizza";
  console.log("Inside IIFE:", secret);
})();

console.log("Outside:", secret); // should break

// into a modern block-scoped using {} and const:
{ const secret = "pizza";
    console.log("Inside IIFE:", secret);
}


// IIEF with arrows
// regular:
(function() {
    console.log("regular function");
})();

// arrow:
(() => {
    console.log("arrow function");
})();

// arrow with parameters:
((name) => {
    console.log(`hello ${name}`);
})("fransheska");
// hello fransheska
