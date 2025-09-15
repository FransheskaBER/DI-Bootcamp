// Pass by value = you give a function a copy of the thing. Changing the copy doesn’t change your original.
// Pass by reference = you give a function a handle (reference) to the original thing. Changing it through that handle changes the original.
// In JavaScript: all arguments are passed by value, but for objects/arrays the value is a reference. So: mutating an object inside a function affects the original; reassigning the parameter does not.

// PRIMITIVE (copy of value):
function bump(n) {
  n = n + 1;          // changes the local copy
}
console.log(bump(5)); // 

let x = 10;
bump(x);
console.log(x);       // 10  (unchanged)
