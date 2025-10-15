/**
 * This is a Jovjs generated file
 * @version 1
 */

/**
 * @type markdown
 * @content
1. **Synchronous programming** = code runs **one line at a time**, in order, and each line must finish before the next starts.

2. **Asynchronous programming** = some tasks can start now and finish later, without blocking the rest of the code.
 */

/**
 * @type markdown
 * @content
## 2) Analogy

Imagine a bakery with one baker:

* **Synchronous**: The baker makes one cake fully, from start to finish, before starting the next. Customers must wait in line.

* **Asynchronous**: The baker puts cake #1 in the oven (it will take 30 mins), and meanwhile starts mixing cake #2. Customers get served faster because the baker doesn’t just stand still waiting.
 */

/**
 * @type markdown
 * @content
## Key ideas

* **Sync (blocking)**: Tasks wait for each other.

* **Async (non-blocking)**: Long tasks (like network requests or timers) don’t freeze the program — JS keeps going and comes back when the task is ready.

* JS uses a **single thread** (only one line of code runs at a time), so async programming is crucial to avoid freezing the browser.
 */

/**
 * @type code
 */
// EXAMPLE: Synchronous (blocking)

console.log("Step 1");
console.log("Step 2");
console.log("Step 3");

// Output:
// Step 1
// Step 2
// Step 3

/**
 * @type code
 */
// EXAMPLE: Asynchronous (non-blocking)

console.log("Start");

setTimeout(() => {
  console.log("This runs later");
}, 2000);

console.log("End");

// Output:
// Start
// End
// This runs later

/**
 * @type markdown
 * @content
## 5) Why this matters

* Without async, every time you fetch data from the internet, your app would freeze until the server responds.

* With async, the user can still scroll, click, or type while waiting.
 */

/**
 * @type markdown
 * @content
## JS CALL STACK

The **JavaScript Call Stack** is like a **to-do list** for the computer.

* Every time you call a function, JavaScript adds it to the stack.

* When a function finishes, it gets removed from the stack.

* JavaScript can only do one thing at a time, so it always runs the function at the **top of the stack** first.
 */

/**
 * @type markdown
 * @content
## 2) Analogy

Think of the call stack like a stack of plates 🍽️:

* You put new plates (functions) on top.

* You can only remove the plate from the top.

* The last plate you put is the first one you take out (**LIFO = Last In, First Out**).
 */

/**
 * @type markdown
 * @content
## 3) Key ideas

* **Push** = add a function call to the stack.

* **Pop** = remove a function when it’s done.

* The stack grows and shrinks as functions are called and finished.

* If the stack gets too full (too many function calls that never end), you get a **“stack overflow” error**.
 */

/**
 * @type code
 */
// EXAMPLE:

function first() {
  console.log("First");
  second();
}

function second() {
  console.log("Second");
  third();
}

function third() {
  console.log("Third");
}

first();

// Step-by-step in the call stack:

// Call first() → push first on the stack.
// Inside first, log "First".

// first calls second() → push second on the stack.
// Inside second, log "Second".

// second calls third() → push third on the stack.
// Inside third, log "Third".

// third finishes → pop it off the stack.
// second finishes → pop it off.
// first finishes → pop it off.
// 👉 Stack is now empty.

// Output:
// First
// Second
// Third

/**
 * @type markdown
 * @content
## 5) What about async code?

When you use `setTimeout` or `fetch`, those don’t stay in the call stack. They go to the **browser’s Web APIs**, and when they finish, their callback is sent to the **task queue** → then added back into the call stack when it’s free.

That’s why async code (like `setTimeout`) doesn’t block the call stack.
 */

/**
 * @type markdown
 * @content
## CALLBACK FUNCTIONS:

A **callback function** is just a function you **pass into another function**, so it can be **called later**.

So:

* Normal function → you call it directly (`sayHello()`).

* Callback → you give it to someone else, and they decide *when* to call it.
 */

/**
 * @type markdown
 * @content
## 1) Key ideas

* Callbacks are functions **passed as arguments** to other functions.

* They’re often used in **asynchronous tasks** (when something finishes later, e.g. timers, fetching data).

* They help avoid blocking code.
 */

/**
 * @type code
 */
// EXAMPLE CALLBACK FUNCTION:

function greet(name, callback) {
  console.log("Hello, " + name);
  callback(); // call the function that was passed in
}

function sayBye() { // sayBye is the callback function when calling greet()
  console.log("Goodbye!");
}

greet("Fransheska", sayBye);

//Output:
// Hello, Fransheska
// Goodbye!

/**
 * @type code
 */
// Example 2: Callback with setTimeout (async)

setTimeout(() => {
  console.log("This runs later");
}, 2000);

// The arrow function () => console.log(...) is the callback.
// setTimeout doesn’t know what the callback does — it just calls it after 2 seconds.

/**
 * @type markdown
 * @content
## 5) Why callbacks matter

* Before promises/async-await, callbacks were the main way to handle async code.

* But too many callbacks inside each other → **“callback hell”** (hard-to-read code). Promises were invented to solve this.
 */

/**
 * @type markdown
 * @content
## CALL STACK, CALLBACK QUEUE, EVENT LOOP:

* **Call Stack** = where JavaScript keeps track of the functions it’s running right now (like a to-do stack).

* **Callback Queue** (also called Task Queue) = a waiting line for callbacks (async tasks) that are ready to run once the stack is free.

* **Event Loop** = the “traffic cop” that checks: *“Is the call stack empty? If yes, take the first thing from the callback queue and put it on the stack.”*
 */

/**
 * @type markdown
 * @content
## 2) Key ideas

* JavaScript runs on **one main thread** (one call stack).

* Long tasks (like timers, API requests) don’t stay on the stack; they go to **Web APIs** (handled by the browser).

* When they’re done, the callback goes to the **Callback Queue**.

* The **Event Loop** moves it into the call stack **only when the stack is empty**.
 */

/**
 * @type code
 */
// Example

console.log("Start");

setTimeout(() => {
  console.log("Async task done!");
}, 2000);

console.log("End");

// Step by step:

// console.log("Start") → runs immediately → stack logs "Start".

// setTimeout(...) → JS tells the browser: “Run this callback after 2s.”

// The callback is stored in Web APIs, not on the stack.

// console.log("End") → runs → logs "End".

// After 2s, the Web API pushes the callback into the Callback Queue.

// The Event Loop sees the stack is empty, moves the callback into the stack.

// Callback runs → logs "Async task done!"".


// 👉 Output order:
// Start
// End
// Async task done!

/**
 * @type markdown
 * @content
## 3) Why it matters

* Explains why async code doesn’t block your app.

* Helps you understand why “later” code sometimes runs **before** “slower” code (like timers or fetch).

* Prevents confusion when debugging order of execution.
 */
