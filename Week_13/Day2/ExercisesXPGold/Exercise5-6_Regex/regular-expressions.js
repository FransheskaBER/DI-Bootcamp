// Exercise 5 : Regular Expression #1
// Instructions
// Use the regular expression module to extract numbers from a string
// Example

// returnNumbers('k5k3q2g5z6x9bn') 
// // Excepted output : 532569

const stringsArr = ["The price is 45 dollars", "I have 2 cats and 14 dogs", "I love 2 eat but also 2 drink 5 sodas"];

console.log("String Numbers:")
stringsArr.forEach(stringText => {
    console.log(stringText.match(/\d+/g));
});

// if you want actual numbers and not numbers as strings:
console.log("Actual Numbers:")
stringsArr.forEach(stringText => {
    console.log(stringText.match(/\d+/g).map(Number));
});

//using replace()
console.log("Using the replace() method:")
stringsArr.forEach(stringText => {
    console.log(stringText.replace(/\D/g, ""));
});

