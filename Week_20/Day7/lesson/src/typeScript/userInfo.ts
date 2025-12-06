let username: string = "Fransheska";
// let age: number = 32;
let isPremium: boolean = false;

function describeUser(name: string, premium: boolean): string {
    if (premium) return `User ${name} is a premium user`;
    return `User ${name} is NOT a premium user`;
}

let message: string  = describeUser(username,isPremium);
console.log(message);
