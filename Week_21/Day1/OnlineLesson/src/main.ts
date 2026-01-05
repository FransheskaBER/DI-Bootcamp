let num: number;
num = 10;

let str: string;
str = "hello"

let bool: boolean;
bool = true;

// Type Union
let strnum: number | string;
strnum = 12;
strnum = "hi";

// Type RegexExp
let reg: RegExp;

// type Array
let strArr: string[];
strArr = ["a", "b", "c"];
strArr.push("d");

let numArra: number[];
numArra = [1, 2, 3];
numArra.push(4);

let strNumArr: (number | string | boolean)[];
strNumArr = [1, "hi", 2, "bye", true];

// type tuple
let myTuple: [string, number, string];
myTuple = ["hello", 234, "bye"];

// type object
let myObj: object; // arrays are also objects
myObj = {};
myObj = [];

let user = {
    name: "John",
    age: 35
};
// user.name = "Anne";
// user.email = "example@email.com"; YOU CANNOT DO IT BECAUSE "email" property is not declare in user
myObj = user;

// type OR interface
type myStringType = string;
let str1: myStringType = "abc";
let str2: string = "abc";

type strNum = string | number;
let strnum1: strNum = 1;
let strnum2: strNum = "hello";

type TUser = { 
    name: string;
    age: number;
    email: string;
}
let user2: TUser = {
    name: "Yotam",
    age: 45,
    email: "yotam@example.com"
}

interface UserI {
    name: string;
    age: number;
    email: string;
    gender?: string;
}
let user3: UserI = {
    name: "Anne",
    age: 43,
    email: "anne@example.com"
}


// type Enum
enum Grade { 
    A, 
    B, 
    C,
    D,
}
console.log(Grade[0]);

// Type Literal
type status = 'Loading' | 'Success' | 'Fail';
let fetchStatus: status = 'Fail';
console.log(fetchStatus);

// Type Aliases
type stringOrNumber = string | number;
type booleanOrStringOrNumber = boolean | stringOrNumber;

type StudentT = {
    name: string;
    grade: Grade;
    status: status;
    classes: stringOrNumber;
}

type AgeT = {
    age: number;
}

type ExtendedStudentT = StudentT & AgeT;

let student1: StudentT = {
    name: "john",
    grade: Grade.A,
    status: "Success",
    classes: 34,
}

let student2: ExtendedStudentT = {
    name: "Marie",
    grade: Grade.C,
    status: "Fail",
    classes: "Math",
    age: 23,
}



// Functions
const sum = (a: number, b: number): number => {
    return a + b;
}

console.log(sum(5, 5));

type StringOrNumber = string | number;
const functionExercise = (a: number, b: stringOrNumber): stringOrNumber => {
    if (typeof b === "number") {
        return a + b + ""; // concat string same as new String(a + b);
    }
    return a + b;
}
console.log(functionExercise(30, 60));
console.log(functionExercise(30, "bye"));

function returnFirstElement( arr: number[]) {
    return arr[0];
}
const numbers = [1, 2, 3, 4, 5];
returnFirstElement(numbers)

// Generics
function returnFirstEl<ElementType>(arr: ElementType[]) {
    return arr[0];
}

const nums = [6, 7, 8, 9, 10];
returnFirstEl(nums);

const strs = ["a", "b", "c", "d"];
returnFirstEl(strs);

// type Functions

type Operation = (num1: number, num2: number) => number;

const sumAB: Operation = (a, b) => {
    return a + b;
};
sumAB(5, 5);


// DOM elements
const myImg = document.querySelector("img") as HTMLImageElement
myImg.src = "https://...";


// Classes and Access Modifiers:
// public > anywhere
// protected > inside the class and subclasses
// private > only inside the class

class User {
    public name: string;
    private age: number;
    protected active: boolean;

    constructor(name: string, age: number, active: boolean) {
        this.name = name;
        this.age = age;
        this.active = active;
    }

    // Methods
    getAge(): number {
        return this.age;
    }

    getactiveStatus(): boolean {
        return this.active;
    }
}

const userJohn = new User("John", 30, true);
console.log(userJohn.getAge());
console.log(userJohn.getactiveStatus());
console.log(userJohn.name);

class Student extends User {
    constructor(name: string, age: number, active: boolean) {
        super(name, age, active);
    }

    getStudentAge(): string {
        return this.name + " is " + this.getAge() + " years old.";
    }
    isStudentActive(): string {
        return this.name + " is " + this.getactiveStatus();
    }
}
const stud1 = new Student("Marie", 22, false);
console.log(stud1.name);
console.log(stud1.getAge());
console.log(stud1.getactiveStatus());
console.log(stud1.getStudentAge());



















