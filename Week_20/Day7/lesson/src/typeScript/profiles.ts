interface Person {
    name: string;
    age: number;
    email?: string;
}

interface Employee extends Person {
    readonly employeeId: number;
    department: string; 
}

interface Location {
    city: string;
    country: string;
}

const employeeProfile: Employee & Location = {
    name: "Fransheska",
    age: 35,
    email: "fransheska@example.com",
    employeeId: 123,
    department: "engineer",
    city: "Tel Aviv",
    country: "Israel"
}
console.log(employeeProfile);
// employeeProfile.employeeId = 345; ERROR
