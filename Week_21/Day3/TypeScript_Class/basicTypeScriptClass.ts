class Person {
    // properties
    ssn: string;
    firstName: string;
    lastName: string;

    // constructor: runs when you create a new Person
    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // method: behavior of the Person
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

// create an object (an instance) of Person
const person1 = new Person("171-28-0926", "John", "Doe");
console.log(person1.getFullName());


class Car {
    brand: string;
    year: number;

    constructor(brand: string, year: number) {
        this.brand = brand;
        this.year = year;
    }

    getCarLabel(): string {
        return `${this.brand} ${this.year}`;
    }
}
const car1 = new Car("Toyota", 2020);
console.log(car1.getCarLabel());

class Movie {
    title: string;
    year: number;

    constructor(title: string, year: number) {
        this.title = title;
        this.year = year;
    }

    getInfo(): string {
        return `${this.title} ${this.year}`;
    }
}
