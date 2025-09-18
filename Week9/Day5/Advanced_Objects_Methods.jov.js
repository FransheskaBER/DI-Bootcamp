/**
 * This is a Jovjs generated file
 * @version 1
 */

/**
 * @type code
 */


/**
 * @type markdown
 * @content
### **Methods of the Object constructor**

In JavaScript, **the `Object` constructor** is a built-in function (`Object`) that creates and manipulates objects. It has several **static methods** (methods you call directly on `Object`, not on an instance) and **prototype methods** (methods available on every object that inherits from `Object.prototype`).

### **Static methods** of `Object`

These are used directly like `Object.method(...)`.

Some of the most important ones are:

* `Object.keys(obj)` → returns an array of the object’s own property names.

* `Object.values(obj)` → returns an array of the object’s own property values.

* `Object.entries(obj)` → returns an array of `[key, value]` pairs.

* `Object.fromEntries(iterable)` → does the reverse of `Object.entries`: builds an object from key-value pairs.

* `Object.hasOwn(obj, prop)` (newer, ES2022) → returns `true` if property exists directly on the object.
 */

/**
 * @type markdown
 * @content
# Object.keys(obj)

`Object.keys(obj)` returns an array of all the **own** (not inherited), **enumerable** property names of an object.

## **Analogy**

Imagine you have a toolbox (the object).\
The **labels** on each drawer are the *keys* (property names).\
`Object.keys` just hands you a list of those labels.

## **Key ideas**

* Returns **array of strings** (even if your keys are numbers, they come back as strings).

* Only **own properties** (doesn’t include things from the prototype).

* Only **enumerable** ones (skips hidden/non-enumerable ones).

* Useful for looping over object properties.
 */

/**
 * @type code
 * @executionCount 2
 * @executingLine 10
 * @lastExecutionTime 4
 * @output
@log
[
  "name",
  "age",
  "country"
]
@log
name > Alice
@log
age > 25
@log
country > Spain
 */
const user = {
  name: "Alice",
  age: 25,
  country: "Spain"
};

console.log(Object.keys(user));

Object.keys(user).forEach(key => {
  console.log(`${key} > ${user[key]}`);
});

/**
 * @type code
 * @executionCount 3
 * @executingLine 6
 * @lastExecutionTime 2
 * @output
@log
[
  "theme",
  "notifications"
]
 */
const settings = {
  theme: "dark",
  notifications: true
};

console.log(Object.keys(settings));
// ["theme", "notifications"]

/**
 * @type code
 * @executionCount 7
 * @executingLine 10
 * @lastExecutionTime 4
 * @output
@log
[
  "Alice",
  "Bob",
  "Charlie"
]
@log
[
  "Alice",
  "Bob",
  "Charlie"
]
@log
Alice score 90
@log
Alice score 90
@log
Bob score 72
@log
Bob score 72
@log
Charlie score 88
@log
Charlie score 88
@log
[
  "Alice",
  25,
  "Spain"
]
@log
[
  "Alice",
  25,
  "Spain"
]
@log
Alice!!!
@log
25!!!
@log
Spain!!!
@log
[
  "Alice",
  25,
  "Spain"
]
@log
Alice!!!
@log
25!!!
@log
Spain!!!
@log
[
  "dark",
  true
]
@log
[
  1,
  2,
  3
]
@log
6
@log
[
  1,
  2,
  3
]
@log
Total = 6
@log
[
  [
    "name",
    "Alice"
  ],
  [
    "age",
    25
  ],
  [
    "country",
    "Spain"
  ]
]
@log
key: name > value: Alice
@log
key: age > value: 25
@log
key: country > value: Spain
@log
[
  [
    "brand",
    "Toyota"
  ],
  [
    "year",
    2020
  ]
]
@log
We have 10 apples
@log
We have 5 bananas
@log
We have 8 oranges
@log
apples:10
@log
bananas:5
@log
oranges:8
@log
[
  "apples: 10"
]
@log
[
  "bananas: 5"
]
@log
[
  "oranges: 8"
]
@log
[
  "apples: 10",
  "bananas: 5",
  "oranges: 8"
]
@log
{
  "name": "Alice",
  "age": 25,
  "country": "Spain"
}
@log
{
  "apple": 2,
  "banana": 3,
  "orange": 4
}
@log
{
  "x": 10,
  "y": 20
}
@log
[
  [
    "name",
    "Alice"
  ],
  [
    "age",
    25
  ]
]
@log
{
  "name": "Alice",
  "age": 25
}
@log
{
  "Alice": 90,
  "Bob": 72,
  "Charlie": 88
}
@log
{
  "Alice": 90,
  "Bob": 72,
  "Charlie": 88
}
@log
[
  "Alice scored 90",
  "Bob scored 72",
  "Charlie scored 88"
]
@log
{
  "Alice": 90,
  "Bob": 72,
  "Charlie": 88
}
@log
[
  "Alice scored 90",
  "Bob scored 72",
  "Charlie scored 88"
]
@log
{
  "Alice": 90,
  "Bob": 72,
  "Charlie": 88
}
@log
[
  "Alice scored 90",
  "Bob scored 72",
  "Charlie scored 88"
]
@log
true
@log
false
@log
false
@log
true
@log
false
 */
const scores = {
  Alice: 90,
  Bob: 72,
  Charlie: 88
};

console.log(Object.keys(scores));

Object.keys(scores).forEach(key => {
  console.log(`${key} score ${scores[key]}`)
});
// There is a bug hence it prints twice the output but the code is good

/**
 * @type markdown
 * @content
# **Object.values(obj)**

`Object.values(obj)` returns an array of the object’s **own**, **enumerable** property values (not the keys).

## **Analogy**

Think of your toolbox again 🧰:

* The **labels** on the drawers are the keys (`Object.keys`).

* The **things inside the drawers** are the values (`Object.values`).

  ## **Key ideas**

  * Returns an **array of values**.

  * Only **own properties** (not inherited).

  * Only **enumerable** properties (same rule as `Object.keys`).

  * Order of values matches the order of the keys.
 */

/**
 * @type code
 * @executionCount 10
 * @executingLine 10
 * @lastExecutionTime 4
 * @output
@log
[
  "Alice",
  25,
  "Spain"
]
@log
Alice!!!
@log
25!!!
@log
Spain!!!
 */
const user = {
  name: "Alice",
  age: 25,
  country: "Spain"
};

console.log(Object.values(user));

Object.values(user).forEach(value => {
  console.log(`${value}!!!`)
});

/**
 * @type code
 * @executionCount 11
 * @executingLine 6
 * @lastExecutionTime 2
 * @output
@log
[
  "dark",
  true
]
 */
const settings = {
  theme: "dark",
  notifications: true
};

console.log(Object.values(settings));

/**
 * @type code
 * @executionCount 13
 * @executingLine 9
 * @lastExecutionTime 4
 * @output
@log
[
  1,
  2,
  3
]
@log
Total = 6
 */
const prices = {
  apple: 1,
  banana: 2,
  orange: 3
};

console.log(Object.values(prices));

console.log(`Total = ${Object.values(prices).reduce((acc, value) => acc + value, 0)}`);

/**
 * @type markdown
 * @content
# **Object.entries(obj)**

`Object.entries(obj)` returns an array of an object’s **own**, **enumerable** key–value pairs, where each pair is in the form `[key, value]`.

## **Analogy**

Think of a contact list in your phone 📱:

* `Object.keys` = just the names.

* `Object.values` = just the phone numbers.

* `Object.entries` = name + phone number together in a little card.

  ## **Key ideas**

  * Returns an **array of arrays**:

    ```
    [ ["name", "Alice"], ["age", 25] ]
    ```

  * Only includes **own**, **enumerable** properties (same as `keys`/`values`).

  * Perfect for looping with `for...of` or mapping directly.
 */

/**
 * @type code
 * @executionCount 14
 * @executingLine 10
 * @lastExecutionTime 6
 * @output
@log
[
  [
    "name",
    "Alice"
  ],
  [
    "age",
    25
  ],
  [
    "country",
    "Spain"
  ]
]
@log
key: name > value: Alice
@log
key: age > value: 25
@log
key: country > value: Spain
 */
const user = {
  name: "Alice",
  age: 25,
  country: "Spain"
};

console.log(Object.entries(user));

for (const [key, value] of Object.entries(user)){
  console.log(`key: ${key} > value: ${value}`);
}

/**
 * @type code
 * @executionCount 15
 * @executingLine 6
 * @lastExecutionTime 3
 * @output
@log
[
  [
    "brand",
    "Toyota"
  ],
  [
    "year",
    2020
  ]
]
 */
const car = {
  brand: "Toyota",
  year: 2020
};

console.log(Object.entries(car));
// [["brand", "Toyota"'], ["year", "20202"]]

/**
 * @type code
 * @executionCount 16
 * @executingLine 9
 * @lastExecutionTime 4
 * @output
@log
We have 10 apples
@log
We have 5 bananas
@log
We have 8 oranges
 */
const stock = {
  apples: 10,
  bananas: 5,
  oranges: 8
};


for (const[key, value] of Object.entries(stock)){
  console.log(`We have ${value} ${key}`);
}

/**
 * @type code
 * @executionCount 20
 * @executingLine 8
 * @lastExecutionTime 4
 * @output
@log
[
  "apples: 10",
  "bananas: 5",
  "oranges: 8"
]
 */
const stock = {
  apples: 10,
  bananas: 5,
  oranges: 8
};

const result = Object.entries(stock).map(([key, value]) => `${key}: ${value}`);
console.log(result);

/**
 * @type markdown
 * @content
# **Object.fromEntries(iterable)**

`Object.fromEntries(iterable)` takes an iterable (like an array of `[key, value]` pairs) and turns it back into an object.

In other words, converts an array of arrays into an object.

## **Analogy**

Think of `Object.entries` as *unzipping* a backpack into pairs of `[item, quantity]`.\
`Object.fromEntries` is like *zipping it back up* into one organized backpack. 🎒

## **Key ideas**

* Expects an **iterable of pairs** (usually an array of arrays).

* Each inner array’s first element = key, second element = value.

* Very handy for **transforming objects** (you can go: object → entries → map → fromEntries → new object).
 */

/**
 * @type code
 * @executionCount 21
 * @executingLine 5
 * @lastExecutionTime 4
 * @output
@log
{
  "name": "Alice",
  "age": 25,
  "country": "Spain"
}
 */
const arrayEntries = [["name", "Alice"], ["age", 25], ["country", "Spain"]];

const user = Object.fromEntries(arrayEntries);

console.log(user);

/**
 * @type code
 * @executionCount 23
 * @executingLine 8
 * @lastExecutionTime 3
 * @output
@log
{
  "apple": 2,
  "banana": 3,
  "orange": 4
}
@log
{
  "apple": 2,
  "banana": 3,
  "orange": 4
}
@log
{
  "x": 10,
  "y": 20
}
@log
[
  [
    "name",
    "Alice"
  ],
  [
    "age",
    25
  ]
]
@log
{
  "name": "Alice",
  "age": 25
}
@log
{
  "Alice": 90,
  "Bob": 72,
  "Charlie": 88
}
@log
{
  "Alice": 90,
  "Bob": 72,
  "Charlie": 88
}
@log
[
  "Alice scored 90",
  "Bob scored 72",
  "Charlie scored 88"
]
@log
{
  "Alice": 90,
  "Bob": 72,
  "Charlie": 88
}
@log
[
  "Alice scored 90",
  "Bob scored 72",
  "Charlie scored 88"
]
@log
{
  "Alice": 90,
  "Bob": 72,
  "Charlie": 88
}
@log
[
  "Alice scored 90",
  "Bob scored 72",
  "Charlie scored 88"
]
@log
true
@log
false
@log
false
@log
true
@log
false
 */
const prices = {
  apple: 1,
  banana: 2,
  orange: 3
};

const newPrices = Object.fromEntries(Object.entries(prices).map(([key, value]) => [key, value + 1]));
console.log(newPrices);

/**
 * @type code
 * @executionCount 24
 * @executingLine 3
 * @lastExecutionTime 2
 * @output
@log
{
  "x": 10,
  "y": 20
}
 */
const pairs = [["x", 10],["y", 20]];

console.log(Object.fromEntries(pairs));
// { 
// x: 10,
// y: 20
// }

/**
 * @type code
 * @executionCount 25
 * @executingLine 10
 * @lastExecutionTime 4
 * @output
@log
[
  [
    "name",
    "Alice"
  ],
  [
    "age",
    25
  ]
]
@log
{
  "name": "Alice",
  "age": 25
}
 */
const user = {
  name: "Alice",
  age: 25
};

const transformToArrays = Object.entries(user);
console.log(transformToArrays);

const baclToObject = Object.fromEntries(transformToArrays);
console.log(baclToObject);


/**
 * @type code
 * @executionCount 30
 * @executingLine 11
 * @lastExecutionTime 4
 * @output
@log
{
  "Alice": 90,
  "Bob": 72,
  "Charlie": 88
}
@log
{
  "Alice": 90,
  "Bob": 72,
  "Charlie": 88
}
@log
[
  "Alice scored 90",
  "Bob scored 72",
  "Charlie scored 88"
]
@log
[
  "Alice scored 90",
  "Bob scored 72",
  "Charlie scored 88"
]
@log
true
@log
false
@log
false
@log
true
@log
false
 */
const grades = [
  ["Alice", 90],
  ["Bob", 72],
  ["Charlie", 88]
];

const objectGrades = Object.fromEntries(grades);
console.log(objectGrades);

const backToNewArray = Object.entries(objectGrades).map(([key, value]) => `${key} scored ${value}`);
console.log(backToNewArray);

/**
 * @type markdown
 * @content
# **Object.hasOwn(obj, prop)**

`Object.hasOwn(obj, prop)` checks if the given property exists **directly** on the object itself (not inherited from its prototype).\
It returns `true` or `false`.

## **Analogy**

Think of a house 🏠 (the object) and the things inside it.

* `Object.hasOwn` is like asking: *“Do **you** personally own this TV?”*

* Not *“Does your grandma (prototype) upstairs own one?”*

## **Key ideas**

* Similar to the old method `obj.hasOwnProperty(prop)`, but safer (because some objects might override `hasOwnProperty`).

* Doesn’t look up the prototype chain → only checks the object itself.

* Introduced in **ES2022**, so it’s newer.
 */

/**
 * @type code
 * @executionCount 31
 * @executingLine 8
 * @lastExecutionTime 5
 * @output
@log
true
@log
false
@log
false
 */
const user = {
  name: "Alice",
  age: 25
};

console.log(Object.hasOwn(user, "name"));     // true
console.log(Object.hasOwn(user, "country"));  // false
console.log(Object.hasOwn(user, "toString")); // false (comes from Object.prototype)


/**
 * @type code
 * @executionCount 32
 * @executingLine 4
 * @lastExecutionTime 3
 * @output
@log
true
@log
false
 */
const car = { brand: "Toyota" };

console.log(Object.hasOwn(car, "brand")); // true
console.log(Object.hasOwn(car, "toString")); // false

