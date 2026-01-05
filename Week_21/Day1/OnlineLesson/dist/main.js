"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let num;
num = 10;
let str;
str = "hello";
let bool;
bool = true;
// Type Union
let strnum;
strnum = 12;
strnum = "hi";
// Type RegexExp
let reg;
// type Array
let strArr;
strArr = ["a", "b", "c"];
strArr.push("d");
let numArra;
numArra = [1, 2, 3];
numArra.push(4);
let strNumArr;
strNumArr = [1, "hi", 2, "bye", true];
// type tuple
let myTuple;
myTuple = ["hello", 234, "bye"];
// type object
let myObj; // arrays are also objects
myObj = {};
myObj = [];
let user = {
    name: "John",
    age: 35
};
// user.name = "Anne";
// user.email = "example@email.com"; YOU CANNOT DO IT BECAUSE "email" property is not declare in user
myObj = user;
let str1 = "abc";
let str2 = "abc";
let strnum1 = 1;
let strnum2 = "hello";
let user2 = {
    name: "Yotam",
    age: 45,
    email: "yotam@example.com"
};
let user3 = {
    name: "Anne",
    age: 43,
    email: "anne@example.com"
};
// type Enum
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 0] = "A";
    Grade[Grade["B"] = 1] = "B";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["D"] = 3] = "D";
})(Grade || (Grade = {}));
console.log(Grade[0]);
let fetchStatus = 'Fail';
console.log(fetchStatus);
let student1 = {
    name: "john",
    grade: Grade.A,
    status: "Success",
    classes: 34,
};
let student2 = {
    name: "Marie",
    grade: Grade.C,
    status: "Fail",
    classes: "Math",
    age: 23,
};
// Functions
const sum = (a, b) => {
    return a + b;
};
console.log(sum(5, 5));
const functionExercise = (a, b) => {
    if (typeof b === "number") {
        return a + b + ""; // concat string same as new String(a + b);
    }
    return a + b;
};
console.log(functionExercise(30, 60));
console.log(functionExercise(30, "bye"));
function returnFirstElement(arr) {
    return arr[0];
}
const numbers = [1, 2, 3, 4, 5];
returnFirstElement(numbers);
// Generics
function returnFirstEl(arr) {
    return arr[0];
}
const nums = [6, 7, 8, 9, 10];
returnFirstEl(nums);
const strs = ["a", "b", "c", "d"];
returnFirstEl(strs);
const sumAB = (a, b) => {
    return a + b;
};
sumAB(5, 5);
//# sourceMappingURL=main.js.map