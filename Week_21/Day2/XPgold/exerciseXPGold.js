function processValue(input) {
    if (typeof input === "number") {
        return input.toLocaleString("en-US", { style: "currency", currency: "USD" });
    }
    return input.split("").reverse().join("");
}
console.log(processValue(344));
console.log(processValue("Yoga"));
function sumNumbersInArray(arrayItems) {
    var sum = 0;
    for (var _i = 0, arrayItems_1 = arrayItems; _i < arrayItems_1.length; _i++) {
        var item = arrayItems_1[_i];
        if (typeof item === "number") {
            sum += item;
        }
    }
    return sum;
}
console.log(sumNumbersInArray([10, "hi", 5, "3", 2]));
function introduceAdvancedUser(_a) {
    var name = _a.name, age = _a.age, address = _a.address;
    if (address) {
        return "Welcome, ".concat(name, "! You are ").concat(age, " years old and live in ").concat(address);
    }
    return "Welcome, ".concat(name, "! You are ").concat(age, " years old.");
}
var user1 = {
    name: "John",
    age: 45,
    address: "Atarot 33, Ramat Gan"
};
var user2 = {
    name: "Olivia",
    age: 23
};
console.log(introduceAdvancedUser(user1));
console.log(introduceAdvancedUser(user2));
function welcomeUser(name, greeting) {
    var finalGreeting = greeting !== null && greeting !== void 0 ? greeting : "Hello";
    return "".concat(finalGreeting, ", ").concat(name, "!!");
}
console.log(welcomeUser("Yuriko"));
console.log(welcomeUser("Yuriko", "Welcome"));
