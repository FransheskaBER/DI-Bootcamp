// CLONNING ARRAYS
    // making a copy of an array
    // this is useful becayse if you just assign one array into another, both varibles point
    // to the same array in memory. Changing one will also change the other.

    // Arrays in JS are objects, stored by reference (like an address in memory)
    // single assignment doesnt create a new array, it just shared the reference
    // to truly make a new copy, you need a cloning method


// EXAMPLE:
// ❌ Assignment — not cloning
const arr1 = [1, 2, 3];
const arr2 = arr1; // same reference!
arr2.push(4);

console.log(arr1); // [1, 2, 3, 4]  <-- changed too!

// ✅ Shallow clone with spread operator
const clone1 = [...arr1];
clone1.push(5);

console.log(arr1);    // [1, 2, 3, 4]
console.log(clone1);  // [1, 2, 3, 4, 5]

// ✅ Shallow clone with slice
const clone2 = arr1.slice();
console.log(clone2);  // [1, 2, 3, 4]

// ✅ Shallow clone with Array.from
const clone3 = Array.from(arr1);
console.log(clone3);  // [1, 2, 3, 4]
