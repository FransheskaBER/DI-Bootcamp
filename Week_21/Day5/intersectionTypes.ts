//  a union a | b means that a value CAN be a OR b
//  an intersection a & b means that a value MUST be a AND b at the same time.

type A = { a: number };
type B = { b: string };
type AB = A & B; // AB has: a: number AND b: string
const obj: AB = {
    a: 42,
    b: "hello",
}
// when using AB you need to provide properties that have a nuymber and a stirng


interface Identity {
    id: number;
    name: string;
}
interface Contact {
    email: string;
    phone: string;
}
interface BusinessParner {
    name: string;
    credit: number;
}
type Employee = Identity & Contact & BusinessParner;
const e: Employee = {
    id: 1,
    name: "John",
    email: "john@example.com",
    phone: "123-1234-34455",
    credit: 12345,
}
// This is fine because both Identity and BusinessPartner define name: string.
// If one said name: string and the other said name: number, the intersection would be impossible and TS would yell.


