// a class can "borrow" or inhereted properties and methods from another class
// the class that "borrrows" is the child (subclass) and the class that "gives" is the parent (superclass)

// Superclass
class Person {
    constructor(private firstName: string, private lastName: string) {}

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

// child class
class Employee extends Person {
    public jobTitle: string;

    constructor(firstName: string, lastName: string, jobTitle: string) {
        super(firstName, lastName); // call the superclass constructor
        this.jobTitle = jobTitle;
    }

    describe(): string {
        return `${super.getFullName()} works as a ${this.jobTitle}`;
    }
}
const employee1 = new Employee("Yuri", "Rojas", "Captain");
console.log(employee1.describe());
console.log(employee1.jobTitle);


class Animal {
    move() {
        console.log("The animal moves");        
    }
}
class Dog extends Animal {
    bark() {
        console.log("Woof");
    }
}
const pepper = new Dog();
pepper.move();
pepper.bark();



class Vehicle {
    move() {
        console.log("The vehicle moves");
    }
}
class Car extends Vehicle {
    honk() {
        console.log("Beep");
    }
}