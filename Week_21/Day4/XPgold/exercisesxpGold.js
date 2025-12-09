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
    function Employee(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.getDetails = function () {
        return "Employee info: Name - ".concat(this.name, " | Salary - $").concat(this.salary);
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, salary, department) {
        var _this = _super.call(this, name, salary) || this;
        _this.department = department;
        return _this;
    }
    Manager.prototype.getDetails = function () {
        return "".concat(_super.prototype.getDetails.call(this), " | Department: ").concat(this.department);
    };
    return Manager;
}(Employee));
var manager1 = new Manager("John", 23000, "Engineer");
console.log(manager1.getDetails());
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.getCarDetails = function () {
        return "Car details: make - ".concat(this.make, " | model - ").concat(this.model, " | year - ").concat(this.year);
    };
    return Car;
}());
var car1 = new Car("Toyota", "3D", 2023);
// car1.make = "Tesla" // Cannot assign to 'make' because it is a read-only property.
// car1.model = "Basic" // Cannot assign to 'make' because it is a read-only property.
console.log(car1.getCarDetails());
var MathUtils = /** @class */ (function () {
    function MathUtils() {
    }
    MathUtils.circumference = function (radious) {
        return 2 * this.PI * radious;
    };
    MathUtils.PI = 3.14159;
    return MathUtils;
}());
console.log(MathUtils.circumference(3));
var addition = function (a, b) { return a + b; };
var multipication = function (a, b) { return a * b; };
console.log(addition(5, 5));
console.log(multipication(5, 5));
var RectangleShape = /** @class */ (function () {
    function RectangleShape(color, width, height) {
        this.color = color;
        this.width = width;
        this.height = height;
    }
    RectangleShape.prototype.getArea = function () {
        return this.width * this.height;
    };
    RectangleShape.prototype.getPerimeter = function () {
        return 2 * (this.width + this.height);
    };
    return RectangleShape;
}());
var r1 = new RectangleShape("red", 10, 10);
console.log(r1.getArea());
console.log(r1.getPerimeter());
