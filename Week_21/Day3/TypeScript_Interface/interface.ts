// An interface is a template for an object
//  it tells TypeScript "any object of this type must have these properties with these types"


// WITHOUT INTERFACE:
function getFullName(person: { firstName: string, lastName: string}) {
    return `${person.firstName} ${person.lastName}`;
}
let person = {
    firstName: "John",
    lastName: "Doe",
};
console.log(getFullName(person));


// WITH AN INTERFACE:
interface Person {
    firstName: string;
    lastName: string;
}
function getFullName1(person: Person) {
    return `${person.firstName} ${person.lastName}`;
}
const person1: Person = {
    firstName: "Layla",
    lastName: "Doy",
};
console.log(getFullName(person1));



// YOU CAN HAVE MORE PROPERTIES WHEN YOU CREATE VARIABLES
// jane has more properties than the Person interface requires.
// That’s fine. TypeScript only cares that it has at least the required ones with the right types.
function getFullName2(person: Person): string {
  return `${person.firstName} ${person.lastName}`;
}
const jane = {
  firstName: "Jane",
  middleName: "K.",
  lastName: "Doe",
  age: 22,
};
const janeFullName = getFullName2(jane);
console.log(janeFullName); // "Jane Doe"
//  this is ONLY allow when using the method and calling the object jane, but if you assing the interface Person directly to jane object, then
// extra properties wont be allowed and TS will complain.

