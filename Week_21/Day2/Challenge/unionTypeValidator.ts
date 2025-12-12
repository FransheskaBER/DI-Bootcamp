//You are comparing names of types, not values.

function validateUnionType(value: any, allowedTypes: string[]): boolean {
    const valueType = typeof value;
    for (const type of allowedTypes) {
        if (valueType === type) {
            return true;
        }
    }
    return false;
}
console.log(validateUnionType(45, ["number", "string"])); // true
console.log(validateUnionType("hello", ["number", "boolean"])); // false because "hello" is a string
console.log(validateUnionType(true, ["boolean", "string"])); // true
console.log(validateUnionType(true, ["number", "string"])); // false because true is a boolean
console.log(validateUnionType(100, ["string", "number"])); // true because 100 is a number


