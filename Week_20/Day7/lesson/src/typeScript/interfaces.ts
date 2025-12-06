// SYNTAX:
// interface NameOfInterface {
//     propertyName: type;
//     anotherProperty: type;
// }

interface User {
    id: number;
    name: string;
}
// if you say sth is a User, then it must have an id as number and a name as string.
// for example:
const u: User = {
    id: 1,
    name: "Fransheska"
};

console.log(u);


interface Product {
    id: number;
    title: string;
    price: number;
}

const p1: Product = {
    id: 1,
    title: "Laptop",
    price: 44.34
};
console.log(p1);


interface Person {
    name: string;
    age?: number; // ? makes this property options so the compiler wont tell you it is missing if you opt to exclude it 
}
const person1: Person = { name: "Alice" };
const person2: Person = { name: "Fransheska", age: 35 };
console.log(person1);
console.log(person2);

interface Point {
    readonly x: number;
    readonly y: number;
    // READ-ONLY means you can set the value ONCE when the object is created, but you cannot change it later.
    // this type of property protects values that shouldnt change like IDs, coordinates, creation tymestamps.
}

const point1: Point = { x: 10, y:20 };
console.log(point1);
// point1.x = 50; ===> Cannot assign to 'x' because it is a read-only property.


// Extend interface is like inheritance in JAVA, copy everything from this interface then add more:
interface Shape {
    color: string;
}
interface Circle extends Shape {
    radius: number;
}
const circle1: Circle = {
    color: "red",
    radius: 50
};
console.log(circle1);

