/**
 * This is a Jovjs generated file
 * @version 1
 */

/**
 * @type markdown
 * @content
**WHAT'S JSON?**

JSON stands for JavaScript Object Notation.

It’s a lightweight, text-based format for storing and exchanging data.

It looks like JavaScript objects, but it’s just plain text that any programming language can read.
 */

/**
 * @type markdown
 * @content
**KEY IDEAS:**

1. **Structure**: Key–value pairs inside `{ }`.

2. **Data types allowed**:

   * Strings (`"Hello"`)

   * Numbers (`42`)

   * Booleans (`true`, `false`)

   * Arrays (`[1,2,3]`)

   * Objects (`{ "name": "Alice", "age": 25 }`)

   * `null`

3. **Rules**:

   * Keys must be in double quotes.

   * Strings must use double quotes (not single quotes).

   * No trailing commas.
 */

/**
 * @type code
 */
// EXAMPLE OF A USER API RESPONSE:

{
  "id": 1,
  "name": "Fransheska",
  "isAdmin": false,
  "skills": ["JavaScript", "Python", "SQL"],
  "address": {
    "city": "Tel Aviv",
    "country": "Israel"
  }
}


/**
 * @type markdown
 * @content
Here’s the part that feels “magical”: how you actually **use JSON in JavaScript**.

### 1. Converting JSON → JS object

```
const jsonString = '{"name": "Fransheska", "age": 25}';
const obj = JSON.parse(jsonString);  // turn JSON text into a JS object

console.log(obj.name); // "Fransheska"
console.log(obj.age);  // 25
```

---

### 2. Converting JS object → JSON

```
const user = { name: "Fransheska", age: 25, skills: ["JS", "Python"] };
const jsonData = JSON.stringify(user);  // turn JS object into JSON text

console.log(jsonData);
// '{"name":"Fransheska","age":25,"skills":["JS","Python"]}'
```
 */

/**
 * @type markdown
 * @content
**JS METHODS TO HANDLE JSON:**

**1. JSON.stringify:**

1. **What it does**: Takes a JavaScript object and turns it into a JSON string.

2. **Why**: Useful when you want to *send data* to a server (servers expect text, not raw JS objects).
 */

/**
 * @type code
 */
// EXAMPLE:

const user = { name: "Alice", age: 30 };
const jsonString = JSON.stringify(user);

console.log(jsonString); 
// '{"name":"Alice","age":30}'  <-- notice it's just a string

/**
 * @type markdown
 * @content
**2. Pretty print JSON string**

Sometimes you want the JSON string to be readable (like when debugging).\
`JSON.stringify` takes extra arguments:

*JSON.stringify(value, replacer, space);*

1. `replacer` → ignore certain keys (often `null`) which means dont filter out any keys.

2. `space` → number of spaces (indentation).
 */

/**
 * @type code
 */
// EXAMPLE:

const user = { name: "Alice", age: 30, skills: ["JS", "Python"] };

console.log(JSON.stringify(user, null, 2));
/*
{
  "name": "Alice",
  "age": 30,
  "skills": [
    "JS",
    "Python"
  ]
}
*/


/**
 * @type markdown
 * @content
**3. JSON-encoded object vs Object literal**

* **Object literal** (in JS code):

  ```
  const obj = { name: "Alice" };
  ```

  → Real JavaScript object (you can call `obj.name` directly).

* **JSON-encoded object** (as a string):

  ```
  const json = '{"name":"Alice"}';
  
  ```

  → Just text, not usable until you `JSON.parse(json)`.

⚠️ Common mistake: People try to access `json.name` — but `json` is just a string. You must `parse` it first.
 */

/**
 * @type markdown
 * @content
## 4. Data types supported by JSON

✅ Allowed:

* String → `"Hello"`

* Number → `42`

* Boolean → `true` or `false`

* Null → `null`

* Array → `[1, 2, 3]`

* Object → `{ "key": "value" }`

❌ Not allowed:

* Functions

* Undefined

* Dates (but you can save them as strings: `"2025-09-28"`)
 */

/**
 * @type markdown
 * @content
**NESTED JS OBJECT IN JSON**

## 1. Summary

A **nested JavaScript object in JSON** means you have an object **inside another object**.\
In JSON, you can put `{ }` (objects) inside other `{ }` or inside arrays `[ ]`.\
This nesting allows you to represent hierarchical (tree-like) data.

## 3. Key Ideas

* Outer object has keys → values.

* Some values can themselves be **objects** `{ ... }`.

* This nesting can go many levels deep.

* You access them step by step (dot notation or bracket notation).
 */

/**
 * @type code
 */
// Nested JSON object representing a user profile:

const user = {
  "id": 1,
  "name": "Alice",
  "address": {
    "street": "123 Main St",
    "city": "Tel Aviv",
    "country": {
      "name": "Israel",
      "code": "IL"
    }
  },
  "skills": ["JavaScript", "Python"]
};

// Accessing nested data in JavaScript
console.log(user.address.city);        // "Tel Aviv"
console.log(user.address.country.name); // "Israel"
console.log(user.skills[0]);           // "JavaScript"

/**
 * @type markdown
 * @content
## Important Difference vs JS objects

In JavaScript:

```
const obj = { name: "Alice" };   // key not quoted

```

In JSON:

```
{ "name": "Alice" }   // key **must** be quoted

```

That’s why JSON looks a bit stricter.
 */

/**
 * @type markdown
 * @content
**TOJSON METHOD**

\- Defining `toJSON` lets you **control what’s exposed** — perfect for hiding things like passwords, tokens, or internal-only fields.

\- The **`toJSON` method** is a special method you can define in your JavaScript objects.\
- When you call `JSON.stringify()` on that object, **JavaScript will automatically call `toJSON()` first** (if it exists) to decide what should be turned into JSON.

\- In other words, toJSON() is to define your own custom request of what it is that you want to turned into JSON

## Key Ideas

* Normally, `JSON.stringify(obj)` includes all properties.

* If the object has a `toJSON()` method → that method’s return value is what gets stringified instead.

* It’s often used to:

  * Hide sensitive data (e.g., password fields).

  * Simplify complex objects (like Dates).

  * Format data before sending to APIs.
 */

/**
 * @type code
 */
// EXAMPLE:

const user = {
  name: "Alice",
  password: "secret123",
  age: 30,
  toJSON: function() {
    // Only include safe data
    return { name: this.name, age: this.age };
  }
};

console.log(JSON.stringify(user));
// {"name":"Alice","age":30}

👉 Notice how the password field was left out because toJSON only returned name and age.
