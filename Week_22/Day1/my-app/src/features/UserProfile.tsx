interface UserProfileProps {
    name: string;
    age: number;
}

export default function UserProfile({ name, age }: UserProfileProps) {
    return (
        <>
        <h2>{name}</h2>
        <p>Age: {age}</p>
        </>
    );
}