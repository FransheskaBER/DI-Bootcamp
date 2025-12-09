interface Person {
  readonly id: number;
  firstName: string;
  lastName: string;
}
const p: Person = {
  id: 123,
  firstName: "John",
  lastName: "Doe",
};
p.firstName = "Jonathan"; // ✔ allowed
// p.id = 999;  // ❌ ERROR: Cannot assign to 'id' because it is a read-only property



interface Student {
  readonly studentId: string; //Readonly always means "cannot reassign".
  name: string;
  email?: string; //Optional does not affect readonly.
}
const s: Student = {
  studentId: "A001",
  name: "Fran",
};
s.name = "Fransheska"; // ✔ allowed
s.email = "fran@example.com"; // ✔ allowed
// s.studentId = "A002"; // ❌ not allowed


// Important note: readonly only protects reassignments
// This is ❌ NOT the same as making arrays or objects truly immutable.
interface User {
  readonly info: { age: number };
}

const user1: User = {
  info: { age: 20 },
};
user1.info.age = 30; // ✔ allowed
// user1.info = { name: string }; // ❌Cannot assign to 'info' because it is a read-only property.
console.log(user1); // { info: { age: 30 } }


