// TYPED FUNCTIONS (parameters + the return types)
function add(a: number, b:number): number {
    return a + b;
}
add(23, 23);


// If the function returns nothings, use VOID
function logMessage(message: string): void {
    console.log(message.toUpperCase());
}
logMessage("syntax");


// FUNCTION TYPES (describe the SHAPE of a function)

// store functions in variables
let addFn: (x:number, y:number) => number;

addFn = function (x:number, y:number): number {
    return x + y;
}
// OR
addFn = (x, y) => x + y;



// OPTIONAL PARAMETERS
// use the character "?"
function mutiply(a: number, b: number, c?: number): number {
    if (c !== undefined) {
        return a * b * c;
    }
    return a * b;
}
mutiply(23, 23);
mutiply(23, 23, 23);

function greet(first: string, last?: string): string {
    if (last) {
        return `hello ${first} ${last}`;
    }
    return `hello ${first}`;
}
greet("John", "Doe");
greet("John");


// DEFAULT PARAMETERS
function applyDiscount(price: number, discount: number = 0.05): number {
    return price * (1 - discount);
}
applyDiscount(100); //discount = 0.05 automatically
applyDiscount(100, 0.2); //discount = 0.2

// REST PARAMETERS
// lets you accept any number of arguments of a specific type
function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach(num => total += num);
    return total;
}
getTotal(); // 0 
getTotal(1, 2); // 3
getTotal(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //45

// a rest parameter must be the LAST parameter
// function wrong(a: number, ...nums: number[], b: string) {}
function multiplyAll(...values: number[]): number {
    return values.reduce((acc, v) => acc * v, 1);
}
console.log(multiplyAll(2, 3, 4));


// FUCNTION OVERLOADING - this is usefuly if you want functions to pass different types
// lets you define multiple call signatures for one function
function addition(a: number, b: number): number;
function addition(a: string, b: string): string;
function addition(a: any, b: any): any {
  return a + b;
}
// Rules:
// 1. You write multiple signatures (these tell TypeScript what calls are allowed)
// 2. Then you write one implementation (with broad types like any)
// 3. Inside that implementation, you write logic that works for all overloads
addition(1, 2);          // number
addition("hello", "x");  // string
// addition(true, false);   // ❌ error — overload not allowed


// ALL OVERLOADS MUST HAVE THE SAME NUMBER OF REQUIRED PARAMETERS so:
function sum(a: number, b: number): number;
function sum(a: number, b: number, c?: number): number;
function sum(a: number, b: number, c?: number): number {
  if (c !== undefined) return a + b + c;
  return a + b;
}
// this is correcrt because all of them have a and b as the required prameters.



// METHOD OVERLOADING IN CLASSES
class Counter {
    private current: number = 0;
    
    count(): number;

    count(target: number): number[];
    
    count(target?: number): number | number[] {
        if (typeof target !== undefined) {
            let values: number[] = [];
            for (let i = this.current; i <= target; i++) {
                values.push(i);
            }
            this.current = target;
            return values;
        }
        return ++this.current;
    }
}