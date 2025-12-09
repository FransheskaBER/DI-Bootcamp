// READ ONLY means thta once you set this property, you cannot change it
// you can assign a readonly property when you declare the property OR inside the constructor

class Person {
    readonly birthDate: Date;

    constructor(birthDate: Date) {
        this.birthDate = birthDate;
    }
}
const p1 = new Person(new Date(1990, 5, 20));
// p1.birthDate = new Date(2000, 1, 1); // ❌ Cannot assign to 'birthDate' because it is a read-only property.


class Car {
    constructor (readonly brand: string, readonly year: number) {}
}
const car1 = new Car("Toyota", 2020);
console.log(car1.brand);
// car1.brand = "Honda"; // ❌ Cannot assign to 'birthDate' because it is a read-only property.


class Product {
    readonly id: number;
    public name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    public rename(newName: string) {
        this.name = newName;
    }
}
const product1 = new Product(123, "Book");
console.log(product1.name);
console.log(product1.id);
product1.rename("Magazine");
//product1.id = 456; // ❌ Cannot assign to 'id' because it is a read-only property.
console.log(product1.name);
