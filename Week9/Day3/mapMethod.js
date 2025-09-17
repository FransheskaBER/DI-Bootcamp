// ARRAY.MAP()
// is ONLY used with ARRAYS
// It goes through each item in the array and applies a function to it, and returns a brand-new array with the results.
// The function can get up to 3 arguments (current item, index, whole array)
    // Transform each element of an array into sth else
    // returns a new array
    // the original array is not changed


// EXAMPLES:

const fruits = ["banana", "apple", "cherry"];
const FRUITS = fruits.map(f => f.toUpperCase());

console.log(fruits); // ["banana", "apple", "cherry"]
console.log(FRUITS); // ["APPLE", "BANANA", "CHERRY"]



const users = [
    {name: "Ana", age: "20"},
    {name: "Ben", age: "25"}
];

const names = users.map(u => u.name);
console.log(names); // ["Ana", "Ben"]




let array = [1, 3, 5, 2, 4];

// map calls a function which has "item" as a parameter
result = array.map(function(item){ // map will pass each element of the array as "item" in this function
    return item*2; // the function will double each element of the array so each element * 2 and return it
});
console.log(result); // prints new list containing the doubled values
// map returns a new array, it doesnt change the original array


// EXAMPLES:
const number = [1, 2, 3, 4];
const doubled = number.map(n => n*2); //double each number
console.log(doubled);// [2, 4, 6, 8]
console.log(number); // [1, 2, 3, 4] original unchanged

const fruits = ["apple, banana, cherry"];
const lengths = fruits.map(f => f.length);
console.log(lengths); // [5, 6, 6]
console.log(fruits); //["apple, banana, cherry"]


