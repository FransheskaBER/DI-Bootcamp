// Exercises XP

// What we will learn:
// Variables
// Conditionals
// Loops
// Objects

// 🌟 Exercise 1 : List of people
// Instructions
const people = ["Greg", "Mary", "Devon", "James"];
console.log(people)

// Part I - Review about arrays
// Write code to remove “Greg” from the people array.

let removeGreg = people.shift()
console.log(removeGreg)
console.log(people)

// Write code to replace “James” to “Jason”.
let replaceJames = people.splice(2, 1, "Jason")
console.log(replaceJames)
console.log(people)

// Write code to add your name to the end of the people array.
console.log(people.push("Fransheska"))
console.log(people)

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf("Mary"))

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
let newArray = people.slice(1, 3)
console.log(newArray)
console.log(`This is the new array: ${newArray}`)

// Write code that gives the index of “Foo”. Why does it return -1 ? > Because it is not found
console.log(people.indexOf("Foo")) 

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
console.log(people)
let last = people.length - 1;
console.log(last)

// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.
for (let i = 0; i<people.length; i++){
    console.log(people[i])
}

console.log(people)

// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.
for (let i = 0; i<people.length; i++){
    if (people[i] === "Devon"){
        break;
    }
    console.log(people[i])
}

// 🌟 Exercise 2 : Your favorite colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus
let colors = ["Red", "Black", "Blue", "Orange", "White"];
console.log(colors);
for (let i=0; i<colors.length; i++){
    console.log("My choice #" + (i+1) + " is " + colors[i]);
}
console.log("--------------")

let suffixes = ["st", "nd", "rd", "th"]
for (let i=0; i<colors.length; i++){
    let number = i+1 // regular number
    let suffix;
    if (i<3){
        suffix = suffixes[i];
    } else {
        suffix = suffixes[3];
    }

    console.log(`My ${number}${suffix} choice is ${colors[i]}`);
}

// 🌟 Exercise 3 : Repeat the question
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
// let userNumber = prompt("Enter a number:");
// console.log(typeof(userNumber))

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which w{hile loop is more relevant for this situation?
// let newNumber;
// do {
//     newNumber = parseInt(prompt("Enter your favorite number:"), 10);
//     console.log(newNumber)
// } while (newNumber < 10)


// 🌟 Exercise 4 : Building Management
// Instructions:
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// Review about objects

// Console.log the number of floors in the building.
console.log(building.numberOfFloors)

// Console.log how many apartments are on the floors 1 and 3.
console.log(building.numberOfAptByFloor.firstFloor, building.numberOfAptByFloor.thirdFloor)

// Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(building.nameOfTenants[1], building.numberOfRoomsAndRent.dan[0])

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
let sarahR = building.numberOfRoomsAndRent.sarah[1]
let davidR = building.numberOfRoomsAndRent.david[1]
let danR = building.numberOfRoomsAndRent.dan[1]

if (sarahR + davidR > danR){
    building.numberOfRoomsAndRent.dan[1] = 1200
    console.log("This is the new rent of Dan: " + building.numberOfRoomsAndRent.dan[1])
} else {
    console.log("Dan's rent was not increased")
}

// 🌟 Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.
let family = {
    sister: "Yuriko",
    mom: "Roxana",
    dad: "Juan"
}

for (let i in family){
    console.log(i)
}

for (let i in family){
    console.log(family[i])
}

// Exercise 6 : Rudolf
// Instructions
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
// Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”
let sentence = "";

for (let key in details){
    sentence += key + " " + details[key] + " ";
}

console.log(sentence)

// Exercise 7 : Secret Group
// Instructions
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”

let secretName = ""

for (let key in names){
    secretName += names[key][0]
}

let sortedName = secretName.split("").sort().join("");
console.log(sortedName)



