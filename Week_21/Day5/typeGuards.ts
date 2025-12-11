// TYPEOF
// this work only on primitive types

type Alphanumeric = string | number;
function add(a: Alphanumeric, b: Alphanumeric): Alphanumeric {
    if (typeof a === "number" && typeof b === "number") { return a + b; }
    if (typeof a === "string" && typeof b === "string") { return a.concat(b); }
    throw new Error("Invalid arguments.");
}

function describe(value: string | number) {
    if (typeof value === "number") { return `Number: ${value}`; }
    if (typeof value === "string") { return `String: ${value}`; }
}


// INSTANCEOF
//  use it when you have a union of classes and you want to detect which class an obj belongs ot
class Customer {
    isCreditAllowed(): boolean {
        return true;
    }
}
class Supplier {
    isInShortList(): boolean {
        return true;
    }
}
type BusinessPartner = Customer | Supplier;
function signContract(partner: BusinessPartner): string {
    if (partner instanceof Customer) {
        return partner.isCreditAllowed() ? "Sing with customer" : "credit issue";
    }
    if (partner instanceof Supplier) {
        return partner.isInShortList() ? "Sign with supplier" : "need evaluation";
    }
}


// "IN" operator
// checks whether an object has a specific property

// if ("isCreditAllowed" in partner) {
//   // partner is a Customer class
// } else {
//   // partner is a Supplier class
// }

// This works even if objects don’t come from classes.

// Why use it?
// Because sometimes you receive objects from APIs that aren’t created via constructors, so instanceof won’t work.

type Shape = { kind: "circle"; radious: number } | { kind: "square"; size: number };
function getArea(shape: Shape) {
    if ("radious" in shape) {
        return Math.PI * shape.radious ** 2;
    } else {
        return shape.size * shape.size;
    }
}
// radius in shape → must be a circle
// Otherwise → must be a square

type Car = { wheels: 4; drive(): string };
type Boat = { motor: boolean; sail(): string };
type Vehicle = Car | Boat;
function move(v: Vehicle) {
    if ("drive" in v) {
        return "Car driving";
    } else {
        return "Boat sailing";
    }
}



// USER-DEFINED TYPE GUARDS (arg is Something) - CUSTOM GUARDS
// you can teach TS your own logic
// Its a function that returns a type predicate
function isCustomer(partner: any): partner is Customer {
    return partner instanceof Customer;
}
// inside the if (isCustomer(x)) block, TS knows NOW that x is a customer instance.


// function isEmployee(obj: any): obj is Employee {
//     return obj && typeof obj.employeeId === "number";
// }
// if (isEmployee(someObj)) {
//   // TypeScript knows someObj is Employee here
// }


function isBoat(v: Vehicle): v is Boat { // “If this function returns true, you can safely treat v as Vehicle from this point on.”
    return "sail" in v;
}


// TYPE CASTING AND TYPE ASSERTIONS
// very important note: in TypeScript:
// “Casting” / “Assertion” does not change the value at runtime.
// It only changes how the compiler treats the value.

// "AS" is for casting:
let inputElement = document.querySelector('input[type="text"]') as HTMLInputElement;
console.log(inputElement.value); // ✅ TS now believes it's an HTMLInputElement
// We didn’t change the DOM.
// We just told TS: “Treat this as HTMLInputElement.”

const DOMelement = document.querySelector("#citySelect") as HTMLSelectElement;
const selectedElement = DOMelement.value;

// Assertions with unions
let value: number | string = "hello";
let length = (value as string).length; //“In this context I know value is a string.”

