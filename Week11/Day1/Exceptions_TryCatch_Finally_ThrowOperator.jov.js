/**
 * This is a Jovjs generated file
 * @version 1
 */

/**
 * @type markdown
 * @content
# 1. **Exceptions**

* An **exception** is what happens when your program runs into a problem it can’t handle.

* In plain English: it’s like your code saying **“Uh oh, something went wrong here!”** and stopping unless you deal with it.

**Example (without handling it):**

```
// Trying to use a variable that doesn't exist
console.log(doesNotExist); 
// ❌ Uncaught ReferenceError: doesNotExist is not defined

```

That error is an **exception**.
 */

/**
 * @type markdown
 * @content
# 2. **try...catch**

* `try` = a block of code where you put “risky” stuff (things that might fail).

* `catch` = what to do **if an exception happens**.

**Example:**

```
try {
  console.log(doesNotExist); // risky
} catch (error) {
  console.log("Something went wrong:", error.message);
}

```

➡️ Instead of crashing, the program continues and shows:\
`Something went wrong: doesNotExist is not defined`
 */

/**
 * @type markdown
 * @content
# 3. **finally**

* The `finally` block always runs, **no matter what** (error or no error).

* Good for “clean-up” actions — like closing a file, stopping a spinner, logging out info.

**Example:**

```
try {
  console.log("Trying...");
  console.log(doesNotExist); // this will fail
} catch (error) {
  console.log("Error happened");
} finally {
  console.log("This always runs");
}

```

➡️ Output:

```
Trying...
Error happened
This always runs
```
 */

/**
 * @type markdown
 * @content
# 4. **throw**

* The `throw` operator lets you **create your own errors** (exceptions).

* In plain English: it’s you saying **“this situation is not okay, stop and handle it!”**

**Example:**

```
function divide(a, b) {
  if (b === 0) {
    throw new Error("You cannot divide by zero!");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (err) {
  console.log("Caught an error:", err.message);
}

```

➡️ Output:\
`Caught an error: You cannot divide by zero!`
 */
