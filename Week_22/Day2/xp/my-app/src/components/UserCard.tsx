interface User {
    name?: string;
    age?: number;
    role?: string;
}

const UserCard = ({ name, age, role = "default" }: User) => {
    return (
    <>
    <p>Name: {name}</p>
    <p>Age: {age}</p>
    <p>Role: {role}</p>
    </>
    );
}

export default UserCard;