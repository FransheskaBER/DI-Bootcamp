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
### **Object destructuring**

**Object destructuring** in JavaScript is a shorter way to pull out values from an object and put them into variables. Instead of writing `object.key` many times, you can “unpack” properties directly into separate variables.

### Analogy:

Imagine you buy groceries in a shopping bag. Normally, you’d open the bag and pick items one by one (`bag.apple`, `bag.banana`). With destructuring, it’s like dumping the bag on the table and naming each item directly (`const {apple, banana} = bag`).

### Key ideas:

* Lets you **extract values** from an object into variables.

* The variable names must match the object’s property names (unless you rename them).

* Can also set **default values** if the property is missing.

* Works neatly with function parameters.
 */

/**
 * @type code
 * @executionCount 4
 * @executingLine 20
 * @lastExecutionTime 7
 * @output
@log
Book
@log
20
@log
Book
@log
20
 */
// You have an object
const product = {
  title: "Book",
  price: 20,
  inStock: true
};

// Without destructuring:
const title1 = product.title;
const price1 = product.price;

console.log(title1);
console.log(price1);


// With destructuring:
const { title, price} = product;

console.log(title);
console.log(price);


/**
 * @type code
 * @executionCount 5
 * @executingLine 8
 * @lastExecutionTime 5
 * @output
@log
Alice
@log
25
 */
const user = {
  name: "Alice",
  age: 25
};

const {name, age} = user;
console.log(name);
console.log(age);

/**
 * @type code
 * @executionCount 7
 * @executingLine 16
 * @lastExecutionTime 5
 * @output
@log
Toyota
@log
Corolla
@log
2020
@log
Toyota
@log
Corolla
 */
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};

const {brand, model, year} = car;

console.log(brand);
console.log(model);
console.log(year);

const {brand: carBrand, model: carModel} = car;

console.log(carBrand);
console.log(carModel);

/**
 * @type code
 * @executionCount 9
 * @executingLine 7
 * @lastExecutionTime 4
 * @output
@log
Unknown
 */
const car = {
  brand: "Toyota"
};

const { model = "Unknown" } = car;

console.log(model);

/**
 * @type code
 * @executionCount 11
 * @executingLine 9
 * @lastExecutionTime 4
 * @output
@log
Alice
@log
Spain
 */
const person = {
  name: "Alice",
  age: 30
};

const {name="Unknown", country="Spain"} = person;

console.log(name); // Alice
console.log(country); // Spain

/**
 * @type code
 * @executionCount 21
 * @executingLine 21
 * @lastExecutionTime 4
 * @output
@log
Without setting default values
@log
Jon
Snow
undefined
@log

 After setting default values
@log
Jon
Snow
default country
 */
const employee = {    // Object we want to destructure
    firstname: 'Jon',
    lastname: 'Snow',
    dateofbirth: '1990'
};

const { firstname, lastname, countryy } = employee;
console.log("Without setting default values")
console.log( firstname, lastname, countryy);
// Jon
// Snow
// Undefined

const {
  firstname: fname = 'default firstname',
  lastname: lname = 'default lastname',
  country = 'default country'
} = employee;

console.log("\n After setting default values")
console.log( firstname, lastname, country);
// Jon
// Snow
// default country
