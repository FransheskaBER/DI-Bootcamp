// INTERFACES AS CLASS CONTRACTS
// An interface is a contract that says:
// “Any class that implements me must include these properties and methods.”


// If an interface says:
interface Json {
  toJSON(): string;
}


// Then any class that writes:
// class Book implements Json {
//     //....
// }
// is promising: “I guarantee the class "Book" has a method called toJSON that returns a string.”
// If the class doesn’t include that method, TypeScript errors out immediately.

class Book implements Json {
    constructor(private title: string, private author: string) {}
    
    toJSON(): string {
        return JSON.stringify({ title: this.title, author: this.author });
    }
}
const book1 = new Book("Harry Potter", "JKRoland");
console.log(book1.toJSON()); // {"title":"Harry Potter","author":"JKRoland"}


interface Shape {
    area(): number;
    describe(): string;
}
class Circle implements Shape {
    constructor(private radius: number) {}
    area() {
        return Math.PI * this.radius ** 2;
    }
    describe() {
        return `Circle with radius ${this.radius}`;
    }
}
const c1 = new Circle(34);
console.log(c1.area(), c1.describe());


// IMPORTANT: 
// When a class implements an interface, the methods MUST be public, because the interface represents something that must be callable from outside.
// A class cannot make an interface-required method private or protected, because then it would violate the contract.
// Interfaces can NEVER have private or protected members.






