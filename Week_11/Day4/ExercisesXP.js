// Exercises XP

// What you will learn:
// Promises


    // 🌟 Exercise 1 : Comparison
    // Instructions
    // Create a function called compareToTen(num) that takes a number as an argument.
    // The function should return a Promise:
    // the promise resolves if the argument is less than or equal to 10
    // the promise rejects if argument is greater than 10.

    function compareToTen(num){
    return new Promise((resolve, reject) => {
        if (num<=10){
            resolve("Success");
        } else{
            reject("Failed")
        }})
    }

    compareToTen(15)
        .then(result => console.log(result))
        .catch(err => console.log(err))
    // Failed

    compareToTen(8)
        .then(result => console.log(result))
        .catch(err => console.log(err))
    // Success


// 🌟 Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
let promise = new Promise(resolve => {
    setTimeout(() => resolve("Success"), 4000)
})

promise
    .then(result => console.log(result))
// Success


// 🌟 Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
const promise1 = Promise.resolve(3);
promise1.then(result => console.log(result))
// 3

const promise2 = Promise.reject("Something went wrong");
promise2.catch(err => console.log(err))
// Something went wrong




