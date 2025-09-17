// THE REST OPERATOR (...)
    // looks exactly like the spread operator but it does the opposite job, instead of unpacking values, 
    // it collects multiple values into a single array or object
    
    //Imagine you’re hosting a party 🎉. Instead of listing each guest one by one, you just say “and the
    // rest of the guests” and put them all together in one group. That’s what the rest operator does. 

    // written as ...
    // used in function parameters or destructuring
    // gathers "the rest" of the arguments or properties into one variable

// EXAMPLE:


// In functions:
function showFoods(first, second, ...others) {
  console.log(first);   // "pizza"
  console.log(second);  // "burger"
  console.log(others);  // ["sushi", "pasta", "salad"]
}

showFoods("pizza", "burger", "sushi", "pasta", "salad");


// in array destructuring:
const numbers = [1, 2, 3, 4, 5];
const [a, b, ...rest] = numbers;
console.log(a, b);   // 1 2
console.log(rest);   // [3, 4, 5]



// in object destructuring:
const person = { name: "Fransheska", age: 30, city: "Madrid" };
const { name, ...otherInfo } = person;
console.log(name);       // "Fransheska"
console.log(otherInfo);  // { age: 30, city: "Madrid" }
