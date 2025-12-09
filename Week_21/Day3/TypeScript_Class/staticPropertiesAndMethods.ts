// Static property or method belongs to the class itself NOT to the object
// you can access static properties or methods ONLY usin the class name

class Employee {
    static headcount = 0; // belongs to Employee, NOT each employee instance

    constructor(private name: string) {
        Employee.headcount ++;
    }
}
const e1 = new Employee("John");
const e2 = new Employee("Jane");
console.log(Employee.headcount); // how many employes have been created so far = 2


class MathTools {
    static double(x: number): number {
        return x * 2;
    }
}
console.log(MathTools.double(4)); // 8


class Counter {
    static total = 0; // this is share by everyone - same output to everyone
    value = 0; // this is individual for each object created so hence 1 when calling value on each instance

    constructor() {
        Counter.total++; // everytime you create a new Counter add the total + 1 and the value + 1
        this.value++;
    }
}
const c1 = new Counter();
const c2 = new Counter();
console.log(c1.value);
console.log(c2.value);
console.log(Counter.total);


class Library {
    static totalBooks = 0;
    title: string;

    constructor(title: string) {
        this.title = title;
        Library.totalBooks++;
    }
}




