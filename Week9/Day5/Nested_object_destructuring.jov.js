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

---
 */

/**
 * @type markdown
 * @content
**Nested object destructuring** means pulling values out of objects that are **inside other objects**. It lets you grab deep properties directly, instead of first pulling out the parent object and then its child.

### Analogy

Think of a big box (object) that has smaller boxes inside (nested objects). Instead of first opening the big box and then opening the small box, destructuring lets you reach in and grab the item from the smaller box in one move.

### Key ideas

* Normal destructuring only works on the first level.

* Nested destructuring goes deeper, matching the structure of the object.

* You can combine it with renaming (`property: newName`) and defaults.

* Very useful when working with API responses (which are often deeply nested).
 */

/**
 * @type code
 * @executionCount 6
 * @executingLine 18
 * @lastExecutionTime 3
 * @output
@log
Wihtout nested destructuring: Paris
@log
Wihtout nested destructuring: Paris
@log
Paris
@log
Paris
@log
Alice
@log
Alice
@log
undefined
@log
123
@log
john@example.com
 */
const user = {
  id: 1,
  profile: {
    name: "Alice",
    address: {
      city: "Paris",
      country: "France"
    }
  }
};

// wihtout nested destructuring
const city1 = user.profile.address.city;
console.log(`Wihtout nested destructuring: ${city1}`);

// with nested destructuring
const {profile:{address:{city}}} = user;
console.log(city);

/**
 * @type code
 * @executionCount 9
 * @executingLine 16
 * @lastExecutionTime 3
 * @output
@log
Alice
@log
undefined
 */
const user = {
  id: 1,
  profile: {
    name: "Alice",
    address: {
      city: "Paris",
      country: "France"
    }
  }
};

const {profile:{name}} = user;
console.log(name);

const {profile:{lastName}} = user;
console.log(lastName);
//undefined

/**
 * @type code
 * @executionCount 11
 * @executingLine 14
 * @lastExecutionTime 3
 * @output
@log
123
@log
john@example.com
 */
const order = {
  orderId: 123,
  customer: {
    name: "John Doe",
    contact: {
      email: "john@example.com",
      phone: "123456789"
    }
  }
};

const {orderId, customer:{contact:{email}}} = order;
console.log(orderId);
console.log(email);

/**
 * @type markdown
 * @content

 */
