// .REDUCE()
    // Takes an array and boils it down to a single value by applying a function to each element, one by one.
    // That single value can be a number, string or an object.

// .reduce(callback, initialValue)
    // callback which is a function runs on each item and takes 2 arguments:
        // accumulator - the running total so far
        // currentValue - the current element in the array
    // initialValue is what the accumulator starts as which is often 0 or ""
    // returns ONE final VALUE not an array


// reduce walks the array left→right and keeps a running value called the accumulator.
// On each item, your callback (function) returns the next accumulator.
// At the end, reduce returns that final accumulator (one value: number/object/string…).


// EXAMPLES:

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 10
// How it works step by step:
// Start: acc = 0
// 1st: 0 + 1 = 1
// 2nd: 1 + 2 = 3
// 3rd: 3 + 3 = 6
// 4th: 6 + 4 = 10


const numbers2 = [1, 2];
const sum2 = numbers2.reduce((acc, n) => acc + n, 12);
console.log(sum); // 15
// How it works step by step:
// Start: acc = 15
// 1st: 12 + 1 = 13
// 2nd: 13 + 2 = 15


const numbers3 = [5, 12, 8, 20];
const max = numbers3.reduce((acc, n) => n > acc ? n : acc, -Infinity);
// infinity means bigger than anything so -infinity means smaller than anything
console.log(max); // 20
// How it works step by step:
// Iteration 1
// n = 5, acc = -Infinit
// 5 > -Infinity → true → return 5 → new acc = 5

// Iteration 2
// n = 12, acc = 5
// 12 > 5 → true → return 12 → new acc = 12

// Iteration 3
// n = 8, acc = 12
// 8 > 12 → false → return 12 → acc stays 12

// Iteration 4
// n = 20, acc = 12
// 20 > 12 → true → return 20 → new acc = 20

// End result: max === 20


const letters = ["a", "b", "a", "c", "b"];
const count = letters.reduce((acc, l) => {
    acc[l] = (acc[l] || 0) + 1;
    // acc is the running OBJ.
    // The acc[l] = means "look inside the object at this key(letter is the key)" so if letter = "a" then acc["a"]
    // acc[l] || 0 means "if acc[letter] already exists, use it. If not (if it's undefined), fall back to 0"
    // then +1 adds one
    //finally we assigb it back > acc[letter] = newValue means "increase the count of this letter by 1, or start at 1 if it wants there yet"
    return acc;
}, {}); // {} is the initialValue which is empty object {} so the object starts without keys, empty {}
console.log(count); // { a: 2, b: 2, c: 1 }

// How it works step by step:
// Initial state: acc = {} (empty object).
// We’ll mutate this object as we go and keep returning it.

// Iteration 1

// letter = "a", acc = {}

// acc["a"] (hey, does the key proerty "a" exist? if so bring it if not bring undefines so >) is undefined
// → (undefined || 0) becomes 0
// Set acc["a"] = 0 + 1 = 1 → acc = { a: 1 }
// Return acc

// Iteration 2
// letter = "b", acc = { a: 1 }
// acc["b"] is undefined → default to 0
// Set acc["b"] = 1 → acc = { a: 1, b: 1 }
// Return acc

// Iteration 3
// letter = "a", acc = { a: 1, b: 1 }
// acc["a"] is 1 → (1 || 0) is 1
// Set acc["a"] = 1 + 1 = 2 → acc = { a: 2, b: 1 }
// Return acc

// Iteration 4
// letter = "c", acc = { a: 2, b: 1 }
// acc["c"] is undefined → default to 0
// Set acc["c"] = 1 → acc = { a: 2, b: 1, c: 1 }
// Return acc

// Iteration 5
// letter = "b", acc = { a: 2, b: 1, c: 1 }
// acc["b"] is 1
// Set acc["b"] = 1 + 1 = 2 → acc = { a: 2, b: 2, c: 1 }
// Return acc

// End result: counts === { a: 2, b: 2, c: 1 }



