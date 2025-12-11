// Generics is 1 function that works for any element type and keeps type info.

function getRandomElement<T>(items: T[]): T { // T is a type variable like a placeholder for a real type
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
const numbers = [1, 2, 3, 4, 5];
const randomNumber = getRandomElement(numbers);
const colors = ["red", "blue", "yellow", "orange", "black", "white"];
const randomColor = getRandomElement(colors);
console.log(randomNumber, randomColor); // 2, blue


// GENERICS FUNCITONS WITH MUTIPLE TYPE PARAMETERS
function merge<U, V>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2,
    };
}
// U is the type of the first object
// V is the type of the second object
// the return object is a combination of both
let result = merge({name: "john"}, {jobTitle: "Developer"});
console.log(result);


function pair<A, B>(a: A, b: B) {
    console.log([a, b]);
}
pair(1, "hi");
pair(true, 100);


function makePair<T, K>(a: T, b: K) {
    return [a, b];
}
console.log(makePair("apple", 10));


// GENERIC CONSTRAINTS (extends)
// if you want to use a placeholder type for a key in an object, you need to explicitly say that is a key in an object with extends keyof
function prop<T, K extends keyof T>(obj: T, key: K) { // K extends keyof T = “K must be one of T’s keys”
    return obj[key];
}
console.log(prop({ name: "john" }, "name")); // john
console.log(prop({ name: "john", age: 34 }, "age")); // 34


// you can also constraint T itself
// suposed you want a function that finds the max value but only from arrays of strings and numbers
function findMaxValue<T extends number | string>(items: T[]): T { // T can be number or string
    return items.reduce((max, item) => (item > max ? item: max));
}

function echoLength<T extends { length: number }>(value: T) { //“T must be something that has a length property of type string”
  return value.length;
}
console.log(echoLength("hello")); // string has a .length property
console.log(echoLength([1, 2, 3])); // this array has a .length property
// echoLength(99); // Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.

function logName<T extends { name: string }>(value: T) { // constrain T to “anything that at least has a name: string property”.
    console.log(value.name);
}
logName({ name: "Eva" });
logName({ name: "Yotam", age: 30 });
logName({ name: "Pepper", breed: "Dalmatian", spots: 101 });



// GENERIC INTERFACES
// they describe properties
interface Pair<K, V> { // Pair is a generic interface with two TYPE parameters - You can reuse this interface with different combinations
    key: K;
    value: V;
}
let month: Pair<string, number> = {
    key: "jan",
    value: 1,
}
let user: Pair<string, boolean> = {
    key: "isActive",
    value: true,
}
console.log(month, user);


// Generic interface for methods and collections
interface Collection<T> { // “Any Collection<T> must at least have add() and remove() methods that work on type T.”
    add(o: T): void;
    remove(o: T): void;
}
class List<T> implements Collection<T> {
    private items: T[] = [];

    add(o: T): void {
        this.items.push(o);
    }

    remove(o: T): void {
        const index = this.items.indexOf(o);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }

    getList() {
        return this.items;
    }
}
const nums = new List<number>();
nums.add(45);
nums.add(50);
console.log(nums.getList());
nums.remove(45);
console.log(nums.getList());

const names = new List<string>();
names.add("John");
names.add("Peter");
console.log(names.getList());
names.remove("John");
console.log(names.getList());



// Generic index-type interfaces
interface Options<T> { // “an object whose keys are strings, and whose values are of type T”.
    [name: string]: T;
}
let inputOptions: Options<boolean> = { // any string key, WITH A value that is boolean
    disabled: false,
    visible: true,
};
const translations: Options<string> = { // So Options<string> is basically: { [key: string]: string } but reusable.
    hello: "Hola",
    bye: "Adios",
};



interface APIresponse<T> {
    data: T,
    error: string | null,
}
const cities = ["tel aviv", "rome", "paris", "berlin", "reykjavik"];
const response: APIresponse<string[]> = {
    data: cities,
    error: null,
}
response.error = response.data.length === 0 ? null : "no error";
console.log(response);




// GENERIC CLASSES
// allows you to build reusable data structures where the typr can be decided later
class Stack<T> {
    private elements: T[] = [];
    
    constructor(private size: number) {}

    isEmpty(): boolean {
        return this.elements.length === 0;
    }

    isFull(): boolean {
        return this.elements.length === this.size;
    }

    push(element: T): void {
        if (this.isFull()) {
            throw new Error("The stack is overflow!");
        }
        this.elements.push(element);
    }

    pop(): T {
        if (this.isEmpty()) {
            throw new Error("The stack is empty!");
        }
        return this.elements.pop();
    }
}
const numberStack = new Stack<number>(5);
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.isEmpty());
console.log(numberStack.isFull());
numberStack.pop(); // remove 20 the last item
console.log(numberStack);

const stringStack = new Stack<string>(2);
stringStack.push("hello");

interface User {
    name: string;
    age: number;
    isActive: boolean;
}
const users = new Stack<User>(10); // onyl User objects are allowed


class Box<T> {
    constructor(public value: T) {}
}
const ageBox = new Box<number>(3);
const nameBox = new Box<string>("John");


class Container<T> { // <T> declares a type parameter for the entire class > “This class works with some type T, but I won’t specify it now.
    constructor(private items: T[] = []) {}

    addItem(item: T) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
}