class Employee {
    constructor(protected name: string, protected salary: number) {}

    getDetails() {
        return `Employee info: Name - ${this.name} | Salary - $${this.salary}`;
    }
}
class Manager extends Employee {
    department: string; 

    constructor(name:string, salary: number, department: string) {
        super(name, salary);
        this.department = department;
    }

    getDetails(): string {
        return `${super.getDetails()} | Department: ${this.department}`;
    }
}
const manager1 = new Manager("John", 23000, "Engineer");
console.log(manager1.getDetails());



class Car {
    constructor(
        public readonly make: string,
        private readonly model: string,
        public year: number,
    ) {}

    getCarDetails() {
        return `Car details: make - ${this.make} | model - ${this.model} | year - ${this.year}`;
    }
}
const car1 = new Car("Toyota", "3D", 2023);
// car1.make = "Tesla" // Cannot assign to 'make' because it is a read-only property.
// car1.model = "Basic" // Cannot assign to 'make' because it is a read-only property.
console.log(car1.getCarDetails());




class MathUtils {
    static PI = 3.14159;
    
    static circumference(radious: number): number {
        return 2 * this.PI * radious;
    }
}
console.log(MathUtils.circumference(3));




interface Operation {
    (a: number, b: number): number;
}
const addition: Operation = (a, b) => a + b;
const multipication: Operation = (a, b) => a * b;
console.log(addition(5, 5));
console.log(multipication(5, 5));




interface Shape {
    color: string;
    getArea(): number;
}
interface Rectangle extends Shape {
    readonly width: number;
    readonly height: number;
    getPerimeter(): number;
}
class RectangleShape implements Rectangle {
    constructor(
        public color: string,
        readonly width: number,
        readonly height: number,
    ){}

    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}
const r1 = new RectangleShape("red", 10, 10);
console.log(r1.getArea());
console.log(r1.getPerimeter());

