// An interface doesn’t only describe objects with properties.
// It can also describe function shapes.

interface StringFormat {
    (text: string, upper: boolean): string; //“Anyone who calls a StringFormat function will pass two arguments only: a string and a boolean.”
}

// This interface describes a function that:
// Takes 2 parameters:
// text (string)
// upper (boolean)
// Returns a string.
// No property names — just a function signature.



// USE IT:
let format: StringFormat;

format = function (text: string, upper: boolean) {
    return upper ? text.toUpperCase() : text.toLowerCase();
};
console.log(format("Hi", true)); // HI


// Key points:

// The function assigned to format must match the interface signature.
// Parameter names don’t need to match — only the types and count matter:

// This is also valid:
format = function (str: string, flag: boolean) {
  return flag ? str.toUpperCase() : str.toLowerCase();
};


// If the unction expects more parameters than you provide, that’s fine — JS simply ignores extras.
let lowerCase: StringFormat;

lowerCase = function (str: string) { //A function can accept fewer parameters than declared.
  return str.toLowerCase();
};
console.log(lowerCase("HELLO", false)); // still valid

// let moreParams: StringFormat;
// moreParams = function (str: string, flag: boolean, age: number) ❌ function with more parameters

interface Calc {
    (a: number, b: number): number;
}
const sum: Calc = (x: number, y: number) => x + y;
console.log(sum(5, 5));


interface Formatter {
    (value: string, repeat: number): string;
}
const format1: Formatter = (v: string, r: number) => v.repeat(r)
const format2: Formatter = (v: string) => v.toUpperCase();
// const format3: Formatter = (v, r, extra) => v + r // NOT ALLOWED
console.log(format1("hello", 2)); // hellohello
console.log(format2("hello", 6)); // HELLO


interface StringTransformer {
    (input: string): string;
}
const toUpper: StringTransformer = (text) => text.toUpperCase();
const addExclamation: StringTransformer = (text) => `${text}!`;
const first5chars: StringTransformer = (text) => text.slice(0, 5);
function applyTransform(transform: StringTransformer, value: string): string {
    return transform(value);
}
console.log(applyTransform(toUpper, "java"));
console.log(applyTransform(addExclamation, "hello"));
console.log(applyTransform(first5chars, "typescript"));

