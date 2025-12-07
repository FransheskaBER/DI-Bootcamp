// typescript is a type-safety net that checks your program before it run, checking mistakes.
// let age: number = 35;
// age = "thrirty-five"; // ❌ Type 'string' is not assignable to type 'number'.

function add(a: number, b: number) {
    return a + b;
}
// add(2, "hello"); // ❌ Argument of type 'string' is not assignable to parameter of type 'number'.
add(5, 5);



// HOW WE INSTALL TYPESCRIPT LOCALLY
// npm init -y
// npm install --save-dev typescript

// CREATE A TS CONFIG FILE
// npx tsc --init

// COMPILING A TYPESCRIPT FILE
// npx tsc hello.ts

// TO EXECUTE YOUR TS FILES BEFORE COMPILING
// npm install -D ts-node OR npm install -D tsx
// npx ts-node hello.ts OR npx tsx hello.ts

// RUN THE JAVASCRIPT
// node hello.js


// OBJECT TYPE
let employee: object; // object lowercase means any NON-primitive value so you can asign objects, arrays, functions

employee = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    jobTitle: "Web Developer",
};

// However if you do employee.firstName, TS wont know this property, that's why you need specific object types:
let employee2: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
};
// then you do:
employee2 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  jobTitle: "Web Developer",
};
// Now TS knows which properties exist and their types


// EMPTY TYPE
let vacant: {};
vacant = {};
// TS doesnt let you do vacant.firstName = "john"
// but you can use inherited methods like vacant.toString() OR vacant.valueOf()


// IN REAL APP, USE SPECIFIC OBJECT TYPES INSTEAD OF object OR {}
type Employee = {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
};


// ARRAYS TYPE
let skills: string[] = ["Programing", "Design"];
// skills.push(100); // ❌ Argument of type 'number' is not assignable to parameter of type 'string'.
let languages = ["JS", "TS", "Python"];

// UNION TYPE ARRAY:
let scores: (string | number)[] = ["React", 5, "TypeScript", 10];
// scores.push(true); // ❌ Error - only string and number is allowed

let numbers = [1, 2, 3];
let doubledNumbers = numbers.map(n => n * 10);
console.log(doubledNumbers);


// TUPLES TYPE
// tuples have fixed length and fixed types at each position
let skills2: [string, number];
skills2 = ["Programing", 5]; // Correct order
// skills2 = [5, "Programing"]; // ❌ Wrong order

let color: [number, number, number] = [255, 0, 0]; // this ensures that there are ONLY 3 NUMBERS
// to set an option number:
let bgColor: [number, number, number, number?];
bgColor = [0, 255, 255]; // OK
bgColor = [0, 255, 255, 0.5] // OK too


// ANY vs OBJECT
// let x: any = 123;
// x.toFixed(); //// ✔ Works (no TS error)

// let y: object = 123;
// y.toFixed(); // ❌ Error - TS blocks this

// because ANY turns off TS


// NEVER TYPE
// represent a value that can never happen, like a value that can never return a proper value so an error or forever loops
function fail(message: string): never {
    throw new Error(message);
}
// this function never returns a value, hence its type is NEVER

function forever(): never {
    while (true) {
        console.log("Looping....");
    }
}
// this function never stops, never returns, hence its type is NEVER

// TO catch imposible states, use NEVER:
type Mode = "start" | "stop";
function handle(mode: Mode) {
    switch (mode) {
        case "start": return "starting";
        case "stop": return "stopping";
        default: const check: never = mode;
    }
}


// UNION  TYPE
// allows a valut that can be one or several types
let value: number | string // here the value can be a number OR a string, but just that, nothing else.

let input: number | string;
input = 10;     // ✔ OK
input = "ten";  // ✔ OK
// input = true;   // ❌ Not allowed

function process(value: number | string) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    return value * 5;
}



// ALIASES TYPE
// alias lets you create a custom name for a type/. It is just like a label instead of using the primitive data names (string, number, boolean)
type Name = string;
let userNamee: Name = "Fransheska";

type ID = string | number;
let userId: ID;
userId = 123;
userId = "abc";

type Point2D = [number, number];
let p: Point2D = [10, 20];

type Employeeee = {
    firstName: string;
    lastName: string;
    age: number;
};
let user1: Employeeee = {
    firstName: "John",
    lastName: "doe",
    age: 45,
}
console.log(user1);


// STRING LITERAL TYPES
// lets you defined exactly which string values are allowed
let action: "start" | "stop";
// so the variable ACTION can only be start OR stop, nothing else

type Command = "start" | "stop" | "pause";
function handlee(cmd: Command) {
    console.log("Command is: ", cmd);
}
handlee("pause");




