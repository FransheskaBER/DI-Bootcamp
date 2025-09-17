// .FILTER()
    // creates a new array with only the item that passes the test (condition)
    // if condition returns true then keep the item
    // if condition returns false then throw the item away
    // the new arrat may have fewer items than the original
    // the original array is unchanged


// EXAMPLE:
 
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(n => n%2===0);
console.log(evens); // [2, 4]


const words = ["hi", "hello", "bye"];
const longWords = words.filter(w => w.length > 3);
console.log(longWords); // ["hello"]


const users = [
    {name: "Ana", age: "17"},
    {name: "Ben", age: "21"},
    {name: "Cathy", age: "15"}
];
const adults = users.filter(u => u.age >= 18);
console.log(adults); // [{ name: "Ben", age: 21 }]
