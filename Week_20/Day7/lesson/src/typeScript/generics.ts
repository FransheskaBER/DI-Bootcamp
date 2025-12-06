// you can write code with many types but still be type safety
//  it is a placeholder for a type you can fill later

// so instead of having:
// let box: string;
// // you can define the type later
// let box<T>


// with functions:
function identity<T>(value: T): T {
    return value;
}
console.log(identity(10));
console.log(identity("Hello"));
console.log(identity(true));

// use you can use generics, to define reusable "shapes" of the object:
type Box<T> = {
    value: T;
};
const numberBox: Box<number> = { value: 90 };
const stringBox: Box<string> = { value: "hello" };
console.log(numberBox);
console.log(stringBox);


// Generic Classes - a class can take type parameters
// class Pair<T, U> {
//     constructor(public first: T, public second: U) {}
// }
// const p = new Pair<number, string>(1, "one");
// OR with inference:
// const p = new Pair(1, "one");


// generic types
type Response<T> = {
    data: T;
    success: boolean;
};
const response1: Response<string> = { data: "ok", success: true };
const response2: Response<number> = { data: 200, success: true };
console.log(response1);
console.log(response2);


// Generic classes
class Storage<T> {
    private items: T[] = [];

    add(item: T) {
        this.items.push(item);
    }

    getAll(): T[] {
        return [ ...this.items ];
    }
}
const stringStore = new Storage<string>();
stringStore.add("apple");
stringStore.add("banana");
console.log(stringStore.getAll());

const numberStore = new Storage<number>();
numberStore.add(10);
numberStore.add(20);
console.log(numberStore.getAll());

