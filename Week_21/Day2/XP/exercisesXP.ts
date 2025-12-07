const message: string = "Hello, World!"
console.log(message);


let age: number;
let name: string;
age = 45;
name = "Fransheska";
console.log(age);
console.log(name);


let id: string | number;
id = "abc";
id = 123;


function controlFlow(input: number): string {
    if (input > 0) return "Number is positive";
    if (input < 0) return "Number is negative";
    return "Number is Zero";
}
console.log(controlFlow(-1));
console.log(controlFlow(0));
console.log(controlFlow(1));


function getDetails(name: string, age: number): [string, number, string] {
    const message = `Hello, ${name}! You are ${age} years old`;
    return [name, age, message];
}
const details = getDetails("Alice", 25);
console.log(details);


type Person = {
    name: string;
    age: number;
};
function createPerson(name: string, age: number): Person {
    return {name, age};
}
const person1 = createPerson("Fransheska", 34);
console.log(person1);


// // <input id="username" type="text" />
// const input = document.getElementById("username");
// // To assert that this element is an HTMLInputElement, do:
// if (input instanceof HTMLInputElement) {
//     // To access and manipulate its data, do:
//     input.value = "Hello, Fransheska"
//     const manipulatedValue = input.value;
//     console.log(manipulatedValue);
// }

type Role = "admin" | "editor" | "viewer" | "guest";
function getAction(userRole: Role): string {
    switch(userRole) {
        case "admin": return "Manage users and settings";
        case "editor": return "Edit content";
        case "viewer": return "View content";
        case "guest": return "Limited access";
        default:
            const unknownRole: never = userRole;
            throw new Error(`Unexpected role: ${unknownRole}`);
    }
}
console.log(getAction("admin"));
console.log(getAction("guest"));
// console.log(getAction("super"));



function greet(): string;
function greet(name: string): string;
function greet(name?:string): string {
    if (name !== undefined) {
        return `Hello, ${name}`
    }
    return "Welcome!"
}
console.log(greet());
console.log(greet("Fransheska"));



