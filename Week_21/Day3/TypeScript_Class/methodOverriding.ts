// a child class REPLACES A METHOD that already exists in the parent class

class Person {
    describe(): string {
        return "This is a person";
    }
}
class Student extends Person {
    describe(): string {
        return "This is a student"
    }
}
const s1 = new Student;
console.log(s1.describe()); // This is a student
const p1 = new Person;
console.log(p1.describe()); // This is a person

class Employee extends Person {
    constructor(private role: string) {
        super();
    }
    describe(): string {
        return super.describe() + `, and they work as a ${this.role}`;
    }
}
const e1 = new Employee("Developer");
console.log(e1.describe()); // This is a person, and they work as a Developer



class Device {
    info(): string {
        return "Generic Device";
    }
}
class Phone extends Device {
    info(): string {
        return "Smartphone"
    }
}