class Employee {
    constructor(
        public name: string,
        private age: number,
        protected salary: number,
    ) {}

    getSalaryDetails() {
        return this.salary;
    }

    protected calculateBonus(bonusRate: number) {
        return this.salary * bonusRate;
    }
}
class Manager extends Employee {
    getTotalCompensation(bonusRate: number) {
        const bonus = this.calculateBonus(bonusRate);
        return this.getSalaryDetails() + bonus;
    }
}
class ExecutiveManager extends Manager {
    approveBudget(budget: number, bonusRate: number): boolean {
        const limit = this.getTotalCompensation(bonusRate); //Manager’s approval limit
        return budget <= limit;
    }
}
const exec1 = new ExecutiveManager("name", 34, 2000);
console.log(exec1.approveBudget(5000, 0.2));












abstract class Shape {
    static totalShapes = 0;
    static PI = 3.14159;

    constructor() {
        Shape.totalShapes++;
    }

    static getType() {
        return "Shape"; // of this.name to get the name of te class
    }

    abstract calculateArea(): number;
}
class Circle extends Shape {
    constructor(private radius: number){
        super();
    }

    calculateArea() {
        return Shape.PI * (this.radius ** 2);
    }

    static getType() {
        return "Circle";
    }
}
class Square extends Shape {
    constructor(private side: number){
        super();
    }

    calculateArea() {
        return this.side * this.side;
    }

    static getType() {
        return "Square";
    }
}
console.log(Circle.totalShapes); // 0
const c1 = new Circle(4);
const s1 = new Square(10);;
console.log(Circle.totalShapes); // 2
console.log(Circle.getType());
console.log(c1.calculateArea());
console.log(Square.getType());
console.log(s1.calculateArea());













// function type to avoid repetiting the same function code
type Operator = (x: number, y: number) => number;

interface Calculator {
    a: number;
    b: number;
    operate(op: Operator): number;
}

class AdvancedCalculator implements Calculator {
    constructor(public a: number, public b: number) {}

    operate(op: Operator): number {
        return op(this.a, this.b);
    }
}

const cal1 = new AdvancedCalculator(10, 5);

const addition = cal1.operate((x, y) => x + y);
const substraction = cal1.operate((x, y) => x - y);
const multiplication = cal1.operate((x, y) => x * y);
const division = cal1.operate((x, y) => x / y);

console.log(addition);
console.log(substraction);
console.log(multiplication);
console.log(division);










class Device {
    constructor(readonly serialNum: number) {}

    getInfo(): string {
        return `Serial: ${this.serialNum}`;
    }
}
class Laptop extends Device {
    model: string;
    price: number;

    constructor(serialNum: number, model: string, price: number) {
        super(serialNum);
        this.model = model;
        this.price = price;
    }

    getInfo(): string {
        return `${super.getInfo()} | Model: ${this.model} | Price: $${this.price}`;
    }
}
const d1 = new Device(123);
const laptop1 = new Laptop(123, "Iphone", 23);
console.log(d1.getInfo());
console.log(laptop1.getInfo());
// d1.serialNum = 456 // Cannot assign to 'serialNum' because it is a read-only property.
// laptop1.serialNum = 456 // Cannot assign to 'serialNum' because it is a read-only property.











interface Product {
    readonly name: string;
    readonly price: number;
    readonly discount?: number;
}
interface Electronics extends Product {
    warrantyPeriod: number;
}
class Smartphone implements Electronics {
    readonly name: string;
    readonly price: number;
    readonly discount?: number;
    warrantyPeriod: number;

    constructor(name: string, price: number, warrantyPeriod: number, discount?: number) {
        this.name = name;
        this.price = price;
        this.warrantyPeriod = warrantyPeriod;
        if (discount !== undefined) this.discount = discount; // only set when provided
    }

    calculatePriceAfterDiscount() {
        if (this.discount === undefined) {
            return `No discount has been applied so final price is $${this.price}. `
        }
        const finalPrice = this.price - (this.price * this.discount);
        return `With the applied discount, the final price is $${finalPrice}`
    }
}
const phone1 = new Smartphone("Iphone", 450, 24, 0.20);
console.log(phone1.calculatePriceAfterDiscount());
const phone2 = new Smartphone("Iphone", 450, 24);
console.log(phone2.calculatePriceAfterDiscount());











