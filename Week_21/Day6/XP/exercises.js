;
;
var person = {
    name: "Yuriko",
    age: 35,
    street: "Atarot 33",
    city: "Ramat Gan",
};
console.log(person);
function describeValue(value) {
    if (!value) {
        throw new Error("Value undefined");
    }
    if (typeof value === "number") {
        return "This is a number";
    }
    return "This is a string";
}
;
console.log(describeValue(45));
console.log(describeValue("Hello"));
var someValue = 345;
var strValue = someValue.toUpperCase;
// console.log(strValue); // error
function getFirstElement(list) {
    return list[0].toUpperCase();
}
console.log(getFirstElement(["bye", "hello", "goodbye"]));
function longLength(val) {
    console.log(val.length);
}
longLength("hello"); // 5
longLength([1, 2, 3]); // 3
longLength({ length: 10 }); // 10
;
function describeEmployee(employeeObj) {
    if (employeeObj.position === "Manager") {
        return "You are a Manager";
    }
    return "You are a Developer";
}
var e1 = {
    name: "John",
    age: 34,
    position: "Developer",
    department: "Engineering",
};
var e2 = {
    name: "Anna",
    age: 35,
    position: "Manager",
    department: "Administration",
};
console.log(describeEmployee(e1));
console.log(describeEmployee(e2));
function formatInput(val) {
    var str = val.toString();
    return "Formatted: ".concat(str);
}
console.log(formatInput("hello")); // "hello"
console.log(formatInput(45)); // "45"
console.log(formatInput([1, 2, 3])); // "1, 2, 3"
console.log(formatInput(true)); // "true"
