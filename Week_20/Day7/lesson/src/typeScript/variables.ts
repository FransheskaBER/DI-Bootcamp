// let message: string = "hello, TypeScript!";
// message = "Goodbye, TypeScript!";
// console.log(message);


// let title: string = "Learn TS";
// // title = 123; TS error: number 123 is not a string
// title = "This is a string";

// // to turn off TS and allow any type use ANY
// let user: any = "Alice";
// user = 123;
// user = true;

// // Use void also for function - no value returned and nothing is returned
// function logMessage(): void {
//     console.log("Hello");
// }
// //  the logMessage() does sth but doenst return anything

// // NEVER: this function will never finish normally - meaning the function cannot product a value, a return because
// // it either crashes or loops forever.
// function crash(): never {
//     throw new Error("Something broke!");
// }

// function loopForever() : never {
//     while (true) {
//         // ...
//     }
// }
