// OBJECTS:

// Use to store collections of unordered data and more complex entities
// Objects habe properties (noun) and methods (verb)

// Syntax:

// Empty object :
let objName = {};

let x = {
  property: value,
  property: value,    
  method: function(){}
  ...
};

// this is an object "person" with its properties:
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// 1. Accessing Object properties

// Syntax:
// objectName.propertyName
// OR
// objectName["propertyName"]
let person = {
  firstName: "John",
  lastName: "Doe",
};
console.log(person.firstName) // John
console.log(person["firstName"]) // John

// 2. Adding/ Changing Object properties:
let person = {
  firstName: "John",
  lastName: "Doe",
};
person.firstName = "Sarah"
person.eyeColor= "blue"

console.log(person) 
// {
//   firstName: "Sarah",
//   lastName: "Doe",
//   eyeColor: "blue"
// };


// 3. Deleting Object properties
let person = {
  firstName: "John",
  lastName: "Doe",
};
delete person.firstName
console.log(person) 
// {
//   lastName: "Doe",
// };