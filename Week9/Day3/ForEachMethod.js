// .FOREACH()
// It is for ARRAYS
// It doesnt return anything. It always return "undefined"
// Runs a function once for each item in an array
// It's  used for doing sth like printing, updating the DOM, sending an API call, updating an external variable
// It doesnt create a new array


// EXAMPLES:

const colors = ["red", "green", "blue"];

colors.forEach(c => {
    console.log(c);
});
// red
// green
// blue


const numbers = [1, 2, 3];
let total = 0;

numbers.forEach(n => {
    total += n; // add each number to the total as sum (update external variable)
});
console.log(total); // 6 (because 1+2+3=6)



