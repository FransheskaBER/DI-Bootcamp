/**
 * This is a Jovjs generated file
 * @version 1
 */

/**
 * @type markdown
 * @content
PROMISE is an object that returns a value you hope to receive in the future.
 */

/**
 * @type code
 */
// Promise constructor:

// Syntax

let promise = new Promise(function(resolve, reject) {
  // executor 
});


// The function passed to new Promise is called the executor. When new Promise is created, the executor runs automatically.

// The arguments resolve and reject are callbacks provided by JavaScript

/**
 * @type code
 */
let goodGrades = true;

let endSemester = new Promise(function (resolve, reject) {
    if (goodGrades) {
        resolve("I will get a gift");
    } else {
        reject("I won't get the gift");
    }
});
// Output: "I will get a gift"



// Inside the executor:

// you manually call the resolve() function if the executor is completed successfully.
// you manually call the reject() function if an error occurs.


// The promise object, returned by the new Promise constructor, has a few properties:

// The state of the promise : "pending", "resolved" or "rejected".
// The result of the promise. The result is initially undefined.
  // When the resolve(value) is called, the result becomes the value (the argument of the function resolve)
  // When the reject(error) is called, the result becomes the error (the argument of the function reject)

// For example:
// If you call the variable endSemester you get:

Promise {<resolved>: "I will get a gift"}
__proto__: Promise
[[PromiseStatus]]: "resolved"
[[PromiseValue]]: "I will get a gift"

// The Promise status is resolved because the variable goodGrades is true.

/**
 * @type markdown
 * @content
To see the process of a Promise, let’s add a timer :

```
let goodGrades = true;

let endSemester = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (goodGrades) {
            resolve("I will get a gift");
        } else {
            reject("I won't get the gift");
        }
    }, 5000);
});

console.log(endSemester)

```

Before the 5 seconds are up, you get :

```
Promise {<pending>}
__proto__: Promise
[[PromiseStatus]]: "pending"
[[PromiseValue]]: undefined

```

After the 5 seconds are up, the result is different :

```
Promise {<resolved>: "I will get a gift"}
__proto__: Promise
[[PromiseStatus]]: "resolved"
[[PromiseValue]]: "I will get a gift"
```
 */
