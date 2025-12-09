// this is like INHERITANCE for interfaces

interface Person {
    name: string;
}
interface Employee extends Person {
    jobTitle: string; // An Employee is a Person with an extra property jobTitle.
}
const e1: Employee = { // the Employee instance MUST have a name (from Person) and jobTitle
    name: "Fran",
    jobTitle: "Developer",
};


interface Animal {
    name: string;
}
interface Dog extends Animal {
    bark(): void;
}
// Dog now must have a name and the method bark()




// INTERFACES EXTENDING MULTIPLE INTERFACES
interface HasId {
    id: number;
}
interface hasTimesstamps {
    createdAt: Date;
    updatedAt: Date;
}
interface Entity extends HasId, hasTimesstamps {
    name: string;
}
// Now Entity includes id, createdAt, updatedAt, and name




//🔵 Interfaces Extending Classes (Advanced but important)
// 🧠 What does “interface extending a class” mean?
// When an interface extends a class:
// ✔ The interface inherits the class’s public, protected, and private members
// ✔ But only classes that inherit from that same class are allowed to implement the interface
// This is a way to restrict which classes can implement an interface.


class Control {
    private state: boolean;
}

interface StatefulControl extends Control {
    enable(): void;
}
// StatefulControl inherits the private member state
// Only classes that extend Control have access to that private member "state"
// Therefore only subclasses of Control can implement StatefulControl

class Button extends Control implements StatefulControl {
    enable() {
        // this is valid
    }
}
// class Chart implements StatefulControl {
//     enable() {
//         // This is invalid
//     }
// }

//NOTE:
// If an interface extends a class with private members,
// then any class implementing that interface must ALSO have those private members,
// which means it must be a subclass of that class.
//If an interface extends a class with private/protected members,
// only that class or its subclasses can implement the interface.