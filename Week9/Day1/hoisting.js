// hoisting means the declaration of variables or functions are moved (hoisted) to the top
// of their scope before the code runs. 
// In other words, only the declaration is moved hoisted not the actual value or assignment.

// Functions = you can call function before you declare them

// FOR EXAMPLE:

// you can already call a variable you haven't assign and defined yet and then defined and assign:
console.log(myVar);
var myVar = 10;

//you can call a function and then hoisted it:
sayHello();
function sayHello(){
    console.log("Hello!");
}

// You cannot do hoisted for let and const, you have to first initialize them.