let formatter: (value: string | number) => string;

formatter = function(value: string | number): string {
    if (typeof value === "number") {
        return `Number: ${value.toString()}`;
    }
    return value.toUpperCase();
}
console.log(formatter(34));


function welcome(name: string,  title?: string, greeting: string = "Hello"): string {
    if (title !== undefined) {
        return `${greeting}, ${title} ${name}`;
    }
    return `${greeting}, ${name}`
}
console.log(welcome("Fransheska"));
console.log(welcome("Fransheska", "Engineer"));

function multiplyAllNums( ...nums: number[]): number {
    const total = nums.reduce((acc, val) => acc * val, 1);
    return total;
}
console.log(multiplyAllNums());
console.log(multiplyAllNums(2, 3, 4));
console.log(multiplyAllNums(45, 45, 23, 45, 34, 12333));


function describe(x: number): string;
function describe(x: string): string;
function describe(x: number | string): string {
    if (typeof x === "number") {
        return `Number: ${x.toString()}`;
    }
    return `String of length: ${x.length}`;
}
console.log(describe(34));
console.log(describe("fransheska"));


class Calculator {
    compute(): number;
    compute(x: number): number;
    compute(x?: number): number {
        if (x !== undefined) {
            return x * x;
        }
        return 0;
    }
}
const c = new Calculator();
console.log(c.compute());
console.log(c.compute(7));



