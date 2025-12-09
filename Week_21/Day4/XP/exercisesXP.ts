class Employee {
  private name: string;
  private salary: number;
  public position: string;
  protected department: string;

  constructor(name: string, salary: number, position: string, department: string) {
    this.name = name;
    this.salary = salary;
    this.position = position;
    this.department = department;
  }

  getEmployeeInfo() {
    return `The employee name is ${this.name} with role position as ${this.position}`;
  }
}
const employee1 = new Employee("John", 23444, "Developer", "Tech");
console.log(employee1.getEmployeeInfo());



class Product {
    constructor(readonly id: number, public name: string, public price: number) {}

    getProductInfo() {
        return `The product's name is "${this.name}" and the price is: $${this.price}`;
    }
}
const product1 = new Product(123, "Book", 23);
console.log(product1.getProductInfo());
// product1.id = 564 // Cannot assign to 'id' because it is a read-only property.



class Animal {
    constructor(public name: string) {}

    makeSound() {
        return "Aguyaaaa...!!"
    }
}
class Dog extends Animal {
    makeSound(): string {
        return "Bark..!!!"
    }
}
const mydog = new Dog("Pepper");
console.log(mydog.makeSound());



class Calculator {
    static add(a: number, b: number): number {
        return a + b;
    }

    static substract(a:number, b:number): number {
        return a - b;
    }
}
console.log(Calculator.add(15, 5));
console.log(Calculator.substract(15, 5));



interface User {
    readonly id: number;
    name: string;
    email: string;
}
interface PremiumUser extends User {
    membershipLevel: number;
}
function printUserDetails(user: PremiumUser) {
    console.log(user);
}
const user1 = {
    id: 123,
    name: "John",
    email: "john@example.com",
    membershipLevel: 3,
}
printUserDetails(user1)




