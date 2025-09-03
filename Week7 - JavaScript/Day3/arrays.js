// Array
// JavaScript arrays are used to store multiple values in a single variable. : it’s a list of values.

let users = ["jhon", "bill", "nancy"]
console.log(typeof(users)) // to check the type which will return object because arrays are "objects"


// Access an element in an Array:
let colors = ["blue", "yellow", "green", 54]; 
let favorite = colors[0];
let secondFavorite = colors[2];
console.log(favorite) // blue
console.log(secondFavorite) // green

// Changing an Array Element
let colors2 = ["blue", "yellow", "green"]; 
colors2[0] = "pink"
console.log(colors2) // ["pink", "yellow", "green"]; 

// to return lenght:
colors2.length // return 3

// METHODS:

// 1. push() > to add an element to the end of an array use, push()
colors2.push("orange")
console.log(colors2) // ["blue", "yellow", "green", "orange"];


// 2. pop() to remove the last element
colors2.pop("orange")
console.log(colors2) // ["blue", "yellow", "green"];


// 3. splice() > adds and removes items to an array
// The first parameter defines the position where new elements should be added (spliced in).
// The second parameter defines how many elements should be removed.
// The rest of the parameters define the new elements to be added.

// The splice() method returns an array containing the deleted elements :

let colors = ["blue", "yellow", "green" ]; 
let deletedItem = colors.splice(1, 1, 45, 23);
console.log(deletedItem) //  ['yellow']
console.log(colors) //  ["blue", 45, 23, "green"]; 


// 4. slice()
// The slice() method: slices a piece of an array and starts a new array.
// The slice() method creates a new array. It does not remove any elements from the source array.
// The method then selects elements from the start argument and up to (but not including) the end argument.
let colors = ["blue", "yellow", "green", "pink" ]; 
let favorite = colors.slice(2) 
console.log(favorite) // ["green" , "pink"]; 
console.log(colors) // ["blue", "yellow", "green", "pink" ];

let secondFavorite = colors.slice(0,1) 
console.log(secondFavorite) //[ 'blue' ]
console.log(colors)// ["blue", "yellow", "green", "pink" ];

// 5. toString()
// the toString()method: converts an array to a string of (comma separated) array values.
let colors = ["blue", "yellow", "green" ]; 
let colorstring = colors.toString() 
console.log(colorstring) // blue,yellow,green
console.log(colors) // ["blue", "yellow", "green" ];


// More Array Methods
// You can join all the elements of an array with join() method. Whatever’s within the parentheses will be placed between each item.
// To remove the first element, use shift()
// unshift({item}) will add a new element to the list’s head. It will become index 0