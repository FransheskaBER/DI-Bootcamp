var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    Employee.prototype.getEmployeeInfo = function () {
        return "The employee name is ".concat(this.name, " with role position as ").concat(this.position);
    };
    return Employee;
}());
var employee1 = new Employee("John", 23444, "Developer", "Tech");
console.log(employee1.getEmployeeInfo());
var Product = /** @class */ (function () {
    function Product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    Product.prototype.getProductInfo = function () {
        return "The product's name is \"".concat(this.name, "\" and the price is: $").concat(this.price);
    };
    return Product;
}());
var product1 = new Product(123, "Book", 23);
console.log(product1.getProductInfo());
// product1.id = 564 // Cannot assign to 'id' because it is a read-only property.
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () {
        return "Aguyaaaa...!!";
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        return "Bark..!!!";
    };
    return Dog;
}(Animal));
var mydog = new Dog("Pepper");
console.log(mydog.makeSound());
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.add = function (a, b) {
        return a + b;
    };
    Calculator.substract = function (a, b) {
        return a - b;
    };
    return Calculator;
}());
console.log(Calculator.add(15, 5));
console.log(Calculator.substract(15, 5));
function printUserDetails(user) {
    console.log(user);
}
var user1 = {
    id: 123,
    name: "John",
    email: "john@example.com",
    membershipLevel: 3,
};
printUserDetails(user1);
