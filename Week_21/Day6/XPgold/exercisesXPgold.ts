interface User {
    name: string;
    email: string;
}
interface Admin {
    adminLevel: number;
}
type AdminUser = User & Admin;
function getProperty<K extends keyof AdminUser>(obj: AdminUser, key: K): AdminUser[K] {
    return obj[key];
}
const admin: AdminUser = {
    name: "Ada",
    email: "ada@example.com",
    adminLevel: 4,
}
console.log(getProperty(admin, "name")); // Ada
console.log(getProperty(admin, "age")); // undefined




function castToType<T>(value: unknown, converter: (v: unknown) => T): T {
    return converter(value);
}
const num = castToType("43", Number);
console.log(num);
const str = castToType(456, String);
console.log(str);
const bool = castToType("true", Boolean);
console.log(bool);





function getArrayLength(items: string[] | number[]): number {
    return items.length;
}
console.log(getArrayLength(["hello", "hi"]));
console.log(getArrayLength([45, 415, 23, 234, 55]));
// console.log(getArrayLength(["hello", 45])); // ERROR



interface Storage<T> {
    add(item: T): void;
    get(index: number): T | undefined;
}
class Box<T> implements Storage<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    get(index: number): T | undefined {
        return this.items[index];
    }
}
const numbers = new Box<number>();
numbers.add(45);
numbers.add(50);
console.log(numbers.get(0));
const strings = new Box<string>();
strings.add("Hello");
strings.add("Bye");
console.log(strings.get(1));




interface Item<T> {
    value: T;
}
class Queue<T extends Item<unknown>> {
    private collection: T[] = [];

    add(item: T): void {
        this.collection.push(item);
    }

    remove(): T | undefined {
        return this.collection.shift(); // remove first item
    }
}
const myitems = new Queue<Item<string>>();
myitems.add({ value: "hello" });
myitems.add({ value: "welcome" });
myitems.add({ value: "byebye" });
console.log(myitems);
console.log(myitems.remove());
console.log(myitems);



