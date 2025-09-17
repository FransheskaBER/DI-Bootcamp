// .EVERY()
// Checks if ALL items in an array pass a condition you give it.
// Returns boolean true if every single item passes or false as soon as one item fails.
// You pass a "callback" (a function) that returns true/false
// Stops early as soon as it finds sth that fails
// commonly used for validation


// EXAMPLE:

const numbers = [2, 4, 6, 8];

const allEven = numbers.every(n => n%2===0); // check if all numbers are even
console.log(allEven); // True

const greaterThanFive = numbers.every(n => n>5); // check if all numbers are greater than 5
console.log(greaterThanFive); // False (2 and 4 fail)



const fruits = ["banana", "pear", "avocado"];

console.log(fruits.every(f => f.startsWith("a"))); // True (checks if all fruits start with "a")

