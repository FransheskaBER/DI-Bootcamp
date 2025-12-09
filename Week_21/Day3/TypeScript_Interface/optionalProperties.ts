// is a property that MAY OR MAY NOT exist on an object
//  and you mark it with "?"

interface Person {
    firstName: string;
    middleName?: string;
    lastName: string;
}

function getFullName(person: Person): string {
    if (person.middleName) {
        return `${person.firstName} ${person.middleName} ${person.lastName}`;
    }
    return `${person.firstName} ${person.lastName}`;
}

const person1: Person = {
    firstName: "Jane",
    middleName: "K.",
    lastName: "Doe",
};

const person2: Person = {
    firstName: "John",
    lastName: "Doe",
};

console.log(getFullName(person1));
console.log(getFullName(person2));

