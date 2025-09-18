/**
 * This is a Jovjs generated file
 * @version 1
 */

/**
 * @type markdown
 * @content
You can use **object destructuring in a function’s parameter list**. That means instead of passing an object and then reaching into it inside the function, you immediately “unpack” the needed properties right in the function’s argument list.

### Analogy

Imagine someone gives you a whole backpack (object) with many items inside. Instead of carrying the whole backpack into your room and digging inside, you just grab the water bottle and keys (the properties you care about) right at the door.

### Key ideas

* Works in function **parameters**.

* Makes code cleaner when you only need a few properties.

* You can rename and give defaults there too.

* Common in frameworks like React (e.g. props destructuring).
 */

/**
 * @type code
 * @executionCount 1
 * @executingLine 8
 * @lastExecutionTime 5
 * @output
@log
Hello Alice, you are 25 years old
 */
const person = {
  name: "Alice",
  age: 25,
  city: "Paris"
};

// Function with normal parameter
function greet(user) {
  console.log(`Hello ${user.name}, you are ${user.age} years old`);
}

// Function with destructuring
function greet({ name, age }) {
  console.log(`Hello ${name}, you are ${age} years old`);
}

greet(person); 
// Hello Alice, you are 25 years old


/**
 * @type code
 * @executionCount 2
 * @executingLine 2
 * @lastExecutionTime 3
 * @output
@log
Berlin
 */
function printCity({ address: { city } }) {
  console.log(city);
}

const user = { name: "Bob", address: { city: "Berlin" } };
printCity(user);
// Berlin


/**
 * @type code
 * @executionCount 4
 * @executingLine 9
 * @lastExecutionTime 3
 * @output
@log
Order 101: 2 x Laptop
 */
const order = {
  id: 101,
  item: "Laptop",
  quantity: 2
};


function showOrder({id, item, quantity}){
  console.log(`Order ${id}: ${quantity} x ${item}`);
}

showOrder(order);

/**
 * @type code
 * @executionCount 6
 * @executingLine 9
 * @lastExecutionTime 3
 * @output
@log
Order 201: 1 x Keyboard
@log
Order 201: 1 x Keyboard
 */
const order = {
  id: 201,
  product: {
    name: "Keyboard"
  }
};

function showOrder({id, quantity=1, product:{name}}){
  console.log(`Order ${id}: ${quantity} x ${name}`);
}

showOrder(order);

