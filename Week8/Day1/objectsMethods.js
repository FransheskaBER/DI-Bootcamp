// OBJECT METHODS

// it is just a function that belongs to an object = it is like the object's built-in action or behavior.

// For example, this of a car, it has properties like color red, wheels 4, but also it has methods like drive() and brake()

// objects store key-value pairs (like a dict)
// it the value is a function, we call it a method
// you run or call a method with objectName.methodName()
// many built-in objects like Math and String have methods

// EXAMPLES:
let dog = { // we have an object which is the "dog"
    name: "Pepper",
    breed: "Dalmatian",
    bark: function() {
        console.log("Woof Woof!");
    }
};
dog.bark(); // runs the method > prints "Woof Woof!"
// name and breed > properties
// bark is an object method (a function inside the object)

// built-in methods:
let message = "hello";
console.log(message.toUpperCase()); // "HELLO" - the toUpperCase is a method on strings

let numbers = [1, 2, 3];
numbers.push(4); // adds the number 4 at the end of the array > [1, 2, 3, 4]
// the push is a method on arrays


// THIS KEYWORD
// When you are inside an object method, the "this" keyword refers to the object itself.

// Example:
let dog = {
  name: "Pepper",
  breed: "Dalmatian",
  bark: function() {
    console.log(this.name + " says Woof!"); // Here it's like saying dog.name to call the value of name property
  }
};

dog.bark(); 
// "Pepper says Woof!"


// SO you use this.name instead of dog.name to reuse that function of bark in another object like:
let cat = {
    name: "Luna",
    meow: this.bark // because you use this.name inside the bark function to it calls the current object so it would print
    // Luna says Woof instead of pepper says woof.
};
cat.meow();


