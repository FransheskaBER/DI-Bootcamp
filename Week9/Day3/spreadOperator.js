// SPREAD OPERATOR
    // let's you unpack or spread out elements of an array or properties of an object into 
    // another array or object or into function arguments.
    // it is written as three dots ...
    // works on iterables (arrays, strings) or objects
    // let's you copy, commbine, or expand arrays/objects easily
    // it is ofeten used for function calls, mergin arrays/objects, or making shallow copies


// EXAMPLE

// Arrays
const numbers = [1, 2, 3];
const moreNumbers = [0, ...numbers, 4];
console.log(moreNumbers); // [0, 1, 2, 3, 4]


// Objects
const user = {name: "Fran", age: "30"};
const addCountry = {...user, country: "Spain"};
console.log(addCountry); // { name: "Fransheska", age: 30, country: "Spain" }


// Function arguments
function sum(a, b, c){
    return a+b+c;
}
console.log(sum(...numbers)); // same as sum(1, 2, 3)