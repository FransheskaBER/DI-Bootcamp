/**
 * This is a Jovjs generated file
 * @version 1
 */

/**
 * @type markdown
 * @content
### **Classes**

Classes in JavaScript are **blueprints for creating objects**. They let you define what an object should look like (its properties) and what it should be able to do (its methods).

### Analogy

Think of a class like a **cookie cutter** 🍪. The cutter itself doesn’t produce cookies you can eat — it just defines the shape. But once you use the cutter on dough, you can make as many cookies (objects) as you want with that same shape.

### Key ideas

* A **class** is a template (not an object itself).

* **Properties** = variables that belong to each object created from the class.

* **Methods** = functions that belong to each object created from the class.

* Use the `constructor` method inside a class to set up values when the object is first created.

* You create an object (a “cookie”) from a class (the “cutter”) using the `new` keyword.
 */

/**
 * @type code
 * @executionCount 1
 * @executingLine 9
 * @lastExecutionTime 8
 * @output
@log
Pepper says: Woof!
@log
Lola says: Woof!
 */
// Define a class (cookie cutter)
class Dog {
  constructor(name, breed) {
    this.name = name;   // property
    this.breed = breed; // property
  }

  bark() {              // method
    console.log(`${this.name} says: Woof!`);
  }
}

// Make objects (cookies)
const dog1 = new Dog("Pepper", "Dalmatian");
const dog2 = new Dog("Lola", "Beagle");

dog1.bark(); // Pepper says: Woof!
dog2.bark(); // Lola says: Woof!


/**
 * @type code
 * @executionCount 5
 * @executingLine 10
 * @lastExecutionTime 5
 * @output
@log
Beep Beep from Toyota
@log
Beep Beep from Tesla
@log
The Toyota car is 5 years old
@log
The Tesla car is 1 years old
 */
class Car {
  constructor(brand, year){
    this.brand = brand;
    this.year = year;    
  }
  honk(){
    console.log(`Beep Beep from ${this.brand}`);
  }
  age(){
    console.log(`The ${this.brand} car is ${2025 - this.year} years old`)
  }
}

const car1 = new Car("Toyota", 2020);
const car2 = new Car("Tesla", 2024);

car1.honk();
car2.honk();

car1.age();
car2.age();

/**
 * @type markdown
 * @content
##### **Built-in methods: Getters and Setters**

**Getters and setters** are *special methods* inside a class that let you **control how properties are read or written**.

* A **getter** looks like a function but acts like a property when you read it.

* A **setter** looks like a function but acts like a property when you assign to it.

  ### Analogy

  Think of a **getter** as a *vending machine window* 🥤: you press a button, and it gives you a snack (you don’t see the work behind it).\
  A **setter** is like a *coin slot*: you put money in, and it sets things up internally (e.g., unlocks a snack).

  ### Key ideas

  * They are defined with the keywords `get` and `set`.

  * You **call them like properties**, not like functions.

  * Useful when you want to **validate**, **format**, or **hide internal details** when reading or writing values.
 */

/**
 * @type code
 * @executionCount 6
 * @executingLine 9
 * @lastExecutionTime 6
 * @output
@log
TOYOTA
@log
TESLA
 */
class Car {
  constructor(brand, year) {
    this._brand = brand;   // notice the underscore, used for "internal" storage
    this._year = year;
  }

  // Getter: read the brand in uppercase
  get brand() {
    return this._brand.toUpperCase();
  }

  // Setter: force the brand to always start with a capital letter
  set brand(newBrand) {
    this._brand = newBrand.charAt(0).toUpperCase() + newBrand.slice(1);
  }
}

const car = new Car("toyota", 2020);

console.log(car.brand); // TOYOTA  (getter runs)
car.brand = "tesla";    // setter runs
console.log(car.brand); // Tesla


/**
 * @type markdown
 * @content
Notice:

* When I do `car.brand`, the `get brand()` is used.

* When I do `car.brand = "tesla"`, the `set brand()` is used.
 */

/**
 * @type code
 * @executionCount 24
 * @executingLine 8
 * @lastExecutionTime 6
 * @output
@log
Echevarria
@log
Fransheska Echevarria
@log
John Snow
 */
class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  set fullName(string){
    const parts = string.split(" ");
    this._firstName = parts[0];
    this._lastName = parts[1];
  }
}

const newPerson = new Person("Fransheska", "Echevarria");
console.log(newPerson._lastName); // Echevarria

console.log(newPerson.fullName) // Fransheska Echevarria
newPerson.fullName = "John Snow";
console.log(newPerson.fullName); // John Snow

/**
 * @type markdown
 * @content
Getter and Setter needs to share the same name.

The getter and setter **work on the same property name** (e.g., `age`). That’s why it feels seamless: setting > updates the property name, and getting > shows the updated value of that property name. See example below:
 */

/**
 * @type code
 * @executionCount 25
 * @executingLine 7
 * @lastExecutionTime 4
 * @output
@log
25
@log
30
 */
class Person {
  constructor(age) {
    this._age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value;
  }
}

const p = new Person(25);

console.log(p.age); // 25
p.age = 30;
console.log(p.age); // 30


/**
 * @type markdown
 * @content
**NOTE:** Once you assign `30`, the original `25` is overwritten — the old value is gone. It’s like erasing a whiteboard and writing something new.
 */

/**
 * @type code
 * @executionCount 32
 * @executingLine 10
 * @lastExecutionTime 7
 * @output
@log
10 km/h
@log
20 km/h
@log
0 km/h
@log
The Trek's new speed is 15 km/h'
@log
15 km/h
@log
10 km/h
 */
// Exercise Bike Class

class Bike {
  constructor(brand, speed){
    this._brand = brand;
    this._speed = speed;
  }

  get speed(){
    return `${this._speed} km/h`;
  }

  set speed(number){
    if (number < 0){
      this._speed = 0;
    } else {
      this._speed = number; 
    }
  }

  // Methods
  
  pedalFaster(value){
    this._speed += value;
    console.log(`The ${this._brand}'s new speed is ${this._speed} km/h'`);
  }

  brake(value){
    this._speed = Math.max(0, this._speed - value); // it will return the bigger number against 0 (if the result is positive, the that result wins - if the result is negative, then 0 wins)
  }
}

const bike = new Bike("Trek", 10);

console.log(bike.speed);   // "10 km/h"
bike.speed = 20;           // uses setter
console.log(bike.speed);   // "20 km/h"

bike.speed = -5;           // invalid → setter corrects to 0
console.log(bike.speed);   // "0 km/h"

bike.pedalFaster(15);
console.log(bike.speed);   // "15 km/h"

bike.brake(5);
console.log(bike.speed);   // "10 km/h"

