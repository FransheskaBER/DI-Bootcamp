function processValue(input: string | number):string {
    if (typeof input === "number") {
        return input.toLocaleString("en-US", { style: "currency", currency: "USD" });
    }
    return input.split("").reverse().join("");
}
console.log(processValue(344));
console.log(processValue("Yoga"));


function sumNumbersInArray(arrayItems: (number | string)[]): number {
    let sum = 0;
    for (const item of arrayItems) {
        if (typeof item === "number") {
            sum += item;
        }
    }
    return sum;
}
console.log(sumNumbersInArray([10, "hi", 5, "3", 2]));


type AdvancedUser = {
    name: string;
    age: number;
    address?: string;
}
function introduceAdvancedUser({ name, age, address}: AdvancedUser): string {
    if (address) {
        return `Welcome, ${name}! You are ${age} years old and live in ${address}`
    }
    return `Welcome, ${name}! You are ${age} years old.` 
}
const user1: AdvancedUser = {
    name: "John",
    age: 45,
    address: "Atarot 33, Ramat Gan"
}
const user2: AdvancedUser = {
    name: "Olivia",
    age: 23
}
console.log(introduceAdvancedUser(user1));
console.log(introduceAdvancedUser(user2));


function welcomeUser(name: string, greeting?: string): string {
    const finalGreeting = greeting ?? "Hello"
    return `${finalGreeting}, ${name}!!`
}
console.log(welcomeUser("Yuriko"));
console.log(welcomeUser("Yuriko", "Welcome"));


