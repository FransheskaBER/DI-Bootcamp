type MappedType<T> = T extends number ? number : T extends string ? number : never;
function mapType<T extends number | string>(value: T): MappedType<T> {
  if (typeof value === 'number') {
    return (value * 2) as MappedType<T>;
  } 
  return (value.length) as MappedType<T>;
}
const a = mapType(5);        // a: number
const b = mapType('hello');  // b: string
console.log(a);
console.log(b);





type User = {
    id: number;
    name: string;
    active: boolean;
}
type UserKeys = keyof User; // Get only the keys id, name, active
type valueType = User["name"];   // string

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
const user = { id: 10, name: "fran", active: false };
const valueOfKeyX = getValue(user, "name");
console.log(valueOfKeyX);

type Product = {
    name: string;
    price: number;
}
// type ProductStrKeys = keyof Product; // a union of string literals of the keys: "name" | "price"
function getProperty<T, K extends keyof T>(productObject: T, key: K): T[K] {
    return productObject[key];
}
const product1: Product = {
    name: "Book",
    price: 45,
}
console.log(getProperty(product1, "name"));
console.log(getProperty(product1, "price"));






interface HasNumericProperty {
    [key: string]: number; //“For any property(key) whose name is a string, the value must be a number.”
}
function multiplyProperty<T extends HasNumericProperty, K extends keyof T>(obj: T, key: K, factor: number): number {
    if (obj[key] === undefined) {
        throw new Error(`Property key does not exist`)
    }
    return obj[key] * factor;
}
const numbers = {
    num1: 10,
    num2: 20,
    num3: 30,
}
console.log(multiplyProperty(numbers, "num1", 2)); // 10 * 2
console.log(multiplyProperty(numbers, "num2", 3)); // 20 * 3
console.log(multiplyProperty(numbers, "num3", 0.5)); // 30 * 0.5









