// private - only inside the same class
// protected = inside the class AND its subclasses
// public - everywhere it is the default if you dont write anything

class Person {
    public firstName: string;
    public lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const p = new Person("Ada", "Lovelace");
console.log(p.firstName); // "Ada"


class Person2 {
    private ssn: string;
    
    constructor(ssn: string) {
        this.ssn = ssn;
    }
}
const p2 = new Person2("123-45-6789");
// console.log(p2.ssn); // ❌ Property 'ssn' is private and only accessible within class 'Person2'.


class Person3 {
    protected ssn: string;

    constructor(ssn: string) {
        this.ssn = ssn;
    }
}
class Student extends Person3 {
    getSSN() {
        return this.ssn;
    }
}
const s = new Student("777-99-8888");
// console.log(s.ssn); // ❌ Property 'ssn' is protected and only accessible within class 'Person3' and its subclasses.
console.log(s.getSSN()); // 777-99-8888


class BankAccount {
    public owner: string;
    private balance: number;

    constructor(owner: string, balance: number) {
        this.owner = owner;
        this.balance = balance;
    }

    public deposit(amount: number) {
        this.balance += amount;
    }

    public getBalanace(): number {
        return this.balance;
    }
}
const myaccount = new BankAccount("Fransheska", 200);
// console.log(myaccount.balance); // ❌ Cannot access private property
console.log(myaccount.getBalanace()); //200
myaccount.deposit(450);
console.log(myaccount.getBalanace()); // 650

class User {
    private password: string;
    public username: string;

    constructor(password: string, username: string) {
        this.password = password;
        this.username = username;
    }

    public checkPassword(attempt: string): boolean {
        if (attempt === this.password) {
            return true;
        }
        return false;
    }
}
const user1 = new User("secret123", "fransheska");
console.log(user1.checkPassword("secret"));
console.log(user1.checkPassword("secret123"));




