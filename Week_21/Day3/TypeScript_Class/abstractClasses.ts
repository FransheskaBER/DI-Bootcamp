// An abstract class is a blueprint for other class
// you can NOT create objects from an abstract class
// it can contain normal methods (with code) OR abstract methods (no code)

// An abstract method, it is a method with NO implementation, it says: every child class MUST implement this method

abstract class Employee {
    abstract getSalary(): number; // MUST be implemented by subclasses

    getInfo() {
        return "Employee info";
    }
}


abstract class Employee1 {
    constructor(private first: string, private last: string) {}

    get fullName() {
        return `${this.first} ${this.last}`;
    }

    abstract getSalary(): number;
}
class FullTimeEmployee extends Employee1 {
    constructor(first: string, last: string, private salaray: number) {
        super(first, last);
    }

    getSalary(): number {
        return this.salaray;
    }
}
class Contractor extends Employee1 {
    constructor(first: string, last: string, private rate: number, private hours: number) {
        super(first, last);
    }
    getSalary(): number {
        return this.rate * this.hours;
    }
}
const john = new FullTimeEmployee("John", "Doe", 12000);
const jane = new Contractor("Jane", "Doe", 100, 160);
console.log(john.fullName, john.getSalary());
console.log(jane.fullName, jane.getSalary());


abstract class Animal {
    abstract makeSound(): string;
}
class Dog extends Animal {
    makeSound(): string {
        return "Woof"
    }
}
