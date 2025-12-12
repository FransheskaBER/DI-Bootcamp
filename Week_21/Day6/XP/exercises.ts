interface Person {
    name: string;
    age: number;
};
interface Address {
    street: string;
    city: string;
};
type PersonWithAddress = Person & Address;
const person: PersonWithAddress = {
    name: "Yuriko",
    age: 35,
    street: "Atarot 33",
    city: "Ramat Gan",
}
console.log(person);


function describeValue(value: number | string): string | undefined {
    if (!value) {
        throw new Error("Value undefined")
    }
    if (typeof value === "number") {
        return "This is a number";
    }
    return "This is a string";
};
console.log(describeValue(45));
console.log(describeValue("Hello"));



let someValue: any = 345;
let strValue = (someValue as string).toUpperCase;
// console.log(strValue); // error







function getFirstElement(list: number[] | string[]) {
    return (list[0] as string).toUpperCase();
}
console.log(getFirstElement(["bye", "hello", "goodbye"]));
// console.log(getFirstElement([34, 54, 45, 34])); // error



interface K {
    length: number;
}
function longLength<T extends K>(val: T): void { // K says must have a length property
    console.log(val.length);
}
longLength("hello");      // 5
longLength([1, 2, 3]);   // 3
longLength({ length: 10 }); // 10
// longLength(42); // ❌




type Position = "Manager" | "Developer";
interface Job {
    position: Position;
    department: string;
};
type Employee = Person & Job;
function describeEmployee(employeeObj: Employee): string {
    if (employeeObj.position === "Manager") {
        return "You are a Manager";
    }
    return "You are a Developer";
}
const e1: Employee = {
    name: "John",
    age: 34,
    position: "Developer",
    department: "Engineering",
}
const e2: Employee = {
    name: "Anna",
    age: 35,
    position: "Manager",
    department: "Administration",
}
console.log(describeEmployee(e1));
console.log(describeEmployee(e2));


interface Z {
    toString: () => string;
}
function formatInput<T extends Z>(val: T) {
    const str = val.toString() as string;
    return `Formatted: ${str}`;
}
console.log(formatInput("hello")); // "hello"
console.log(formatInput(45)); // "45"
console.log(formatInput([1, 2, 3])); // "1, 2, 3"
console.log(formatInput(true)); // "true"

