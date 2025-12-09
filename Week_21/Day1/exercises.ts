let message: string = "Hello, world!";
console.log(message);


function greet(name: string): string {
    return `Hello, ${name}`;
}
console.log(greet("Fransheska"));
console.log(greet("Yotam"));
console.log(greet("Pepper"));


let userName: string = "Fransheska";
let userAge: number = 35;
let isAdmin = true;

function getUserInfo(name: string, age: number, admin: boolean): string {
    return `${name} is ${age} years old. Admin: ${admin}`;
}
console.log(getUserInfo(userName, userAge, isAdmin));



type User = {
    id: number;
    name: string;
    role: "admin" | "editor" | "viewer";
};

let user1: User = {
    id: 123, 
    name: "John",
    role: "viewer",
};
console.log(user1);


let allSkills: string[] = [];
allSkills.push("Python");
allSkills.push("Java");
console.log(allSkills);

let unionArray: (number | boolean)[] = [];
unionArray.push(true);
unionArray.push(456);
console.log(unionArray);



// type Point3D = [number, number, number];
const point3D: [number, number, number] = [34, 24, 14]
// function distanceToOrigin([x, y, z]: Point3D): number {
function distanceToOrigin([a, b, c]: [number, number, number]): number {
    const sumOfSquares = (a**2 + b**2 + c**2);
    return Math.sqrt(sumOfSquares);
}
console.log(`The distance to the origin is: ${distanceToOrigin(point3D)}`);



function formatValue(value: number | string): string {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    return `Number: <${value}>`;
}
console.log(formatValue(34));



// function fail(message: string): never {
//     throw new Error(message);
// }
// console.log(fail("ERROR"));

type Command = "start" | "stop" | "pause";
function runCommand(cmd: Command): void {
    switch (cmd) {
        case "start": 
            console.log("System starting..."); 
            break;
        case "pause":
            console.log("System pausing...");
            break;
        case "stop":
            console.log("System stopping...");
            break;
        default:
            const neverValue: never = cmd;
            throw new Error(`Unexpected command: ${neverValue}`);
    }
}
runCommand("pause");





