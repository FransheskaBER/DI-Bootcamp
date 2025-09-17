// .SOME()
// checks if at least one element in an array passes a condition.
// return true if any element satisfies the condition, or false if none do.
// think of it like "is there at least one student wearing a red shirt" if so, return true, if not, return false.
// Stops early as soon as it finds one match
// you give a callback frunction (condition)
// useful for existence checks with logic


// EXAMPLES:

const numbers = [1, 2, 3, 4];
console.log(numbers.some(n => n>3)); // is there at least one number that is greater than 3?
// True (because 4 >3)
console.log(numbers.some(n => n<0)); // is there at least one number that is less than 0?
// false


const fruits = ["banana", "apple", "cherry"];
console.log(fruits.some(f => f.length > 6)); // is there at least one fruit with more than 6 letters?
// true



const users = [
    { name: "Ana", active: false},
    { name: "Ben", active: true}
];
console.log(users.some(u => u.active)); // is there at least one user that is active?
// true




