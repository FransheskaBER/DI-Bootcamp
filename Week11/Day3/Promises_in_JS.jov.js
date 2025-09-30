/**
 * This is a Jovjs generated file
 * @version 1
 */

/**
 * @type markdown
 * @content
A **Promise** in JavaScript is just **an object** that represents something that will finish **later** (success or failure). It’s like saying: *“I promise I’ll give you the result once I’m done — not right now.”*

\- you can create a "new" promise object like "new Promise" and then you can use it with .then (to do sth if successfull), .catch(to do sth if failed), or with .finally(to do sth in the end no matter success or failed).

\- in other words since promise is an object, is it like a box that will hold a result later.

**Key Ideas:**

* **Pending** → the promise is still waiting (food is cooking).

* **Resolved (fulfilled)** → the task finished successfully (food arrives).

* **Rejected** → something went wrong (they can’t serve your dish).

* You use `.then()` to say what to do when it’s successful.

* You use `.catch()` to say what to do if it fails.

* You can also use `.finally()` for code that always runs at the end (like cleaning the table, no matter what).
 */

/**
 * @type markdown
 * @content
why is promise important? because some actions do not finish INSTANTLY. Some actions take some time like fetching data from an API or internet, waiting for a timer to finish or reading a file from your computer, etc.. so those actions do not complete or finish inmeditately, they take some time. So without Promise, JS will freeze until those task actions will be completed, but instead of freeze all your code, you can do sth in the meantime while those task actions are running, in that case, then you need to use Promise (it's like saying "i will keep going and running other codes in the meantime, just let me know when you are done")
 */

/**
 * @type code
 */
// Example:

const pizzaOrder = new Promise((resolve, reject) => { //The "resolve" is a function that tells the promise if the task action was a success. The "reject" is also a function for failed task action.
  let pizzaReady = true;

  if (pizzaReady) {
    resolve("Pizza is ready! 🍕"); // success
  } else {
    reject("Sorry, no pizza 😞"); // failure
  }
});

/**
 * @type code
 */
// Here, you are using the promise object you created:

pizzaOrder
  .then(result => console.log(result))  // runs if success
  .catch(error => console.log(error))   // runs if failure
  .finally(() => console.log("Done waiting.")); // always runs

// Output:
// Pizza is ready! 🍕
// Done waiting

/**
 * @type markdown
 * @content
## PROMISE.ALL()  - PROMISE.RACE()

* **`Promise.all()`**: waits for **all** promises to finish. If all succeed, you get all results in an array. If any fail, it fails immediately.

* **`Promise.race()`**: waits for the **first promise** to finish (either success or failure), and gives you that result.
 */

/**
 * @type markdown
 * @content
## 1) Key ideas

* Both take an **array of promises**.

* `.all()` is useful when tasks are independent but you need *all results*.

* `.race()` is useful when you want the *fastest result* and don’t care about the rest.
 */

/**
 * @type code
 */
//EXAMPLE: Promise.all()

const p1 = Promise.resolve("🍕 Pizza ready");
const p2 = Promise.resolve("🍔 Burger ready");
const p3 = Promise.resolve("🍟 Fries ready");

Promise.all([p1, p2, p3])
  .then(results => console.log(results))
  .catch(error => console.log("One failed:", error));


// Output: ["🍕 Pizza ready", "🍔 Burger ready", "🍟 Fries ready"]


// If one fails:
const p1 = Promise.resolve("Pizza");
const p2 = Promise.reject("Burger burned"); // ❌ fail

Promise.all([p1, p2])
  .then(results => console.log(results))
  .catch(error => console.log("One failed:", error));


// Output: One failed: Burger burned

/**
 * @type code
 */
// EXAMPLE: Promise.race()

const p1 = new Promise(res => setTimeout(() => res("Fast 🚴"), 1000));
const p2 = new Promise(res => setTimeout(() => res("Slower 🚗"), 2000));
const p3 = new Promise(res => setTimeout(() => res("Slowest 🚂"), 3000));

Promise.race([p1, p2, p3])
  .then(result => console.log(result));


// Output after 1 second:
// Fast 🚴

/**
 * @type markdown
 * @content
## 2) Why this matters

* `Promise.all()` = great for fetching multiple things at once (e.g., user profile + settings + notifications).

* `Promise.race()` = great for things like **timeouts** (e.g., pick whichever finishes first: data fetch or a timeout warning).
 */

/**
 * @type markdown
 * @content
## **`Promise.allSettled()`**

* Waits for **all promises** to finish, no matter if they succeed or fail.

* Instead of failing early, it gives you a **report** for each one.
 */

/**
 * @type code
 */
// Example

const p1 = Promise.resolve("🍕 Pizza ready");
const p2 = Promise.reject("❌ Burger burned");
const p3 = Promise.resolve("🍟 Fries ready");

Promise.allSettled([p1, p2, p3])
  .then(results => console.log(results));


// Output:

// [
//   { status: "fulfilled", value: "🍕 Pizza ready" },
//   { status: "rejected", reason: "❌ Burger burned" },
//   { status: "fulfilled", value: "🍟 Fries ready" }
// ]

/**
 * @type markdown
 * @content
## **`Promise.resolve(value)`**

* Creates a promise that is **already successful (resolved)** with the given value.

* Shortcut instead of writing `new Promise((res) => res(value))`.

### Example

```
Promise.resolve("✅ Success")
  .then(result => console.log(result));

```

Output:

```
✅ Success

```

👉 Often used for testing or to make a value behave like a promise.

---

## **`Promise.reject(reason)`**

* Creates a promise that is **already failed (rejected)** with the given reason.

### Example

```
Promise.reject("❌ Something went wrong")
  .catch(error => console.log(error));

```

Output:

```
❌ Something went wrong

```

👉 Useful to simulate errors in async code or to standardize error handling.
 */
