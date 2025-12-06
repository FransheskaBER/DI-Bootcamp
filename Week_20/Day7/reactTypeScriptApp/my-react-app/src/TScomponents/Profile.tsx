type ProfileProps = {
    name: string;
    age?: number;
};

function Profile({ name, age }: ProfileProps) {
    return <div>{name} - {age}</div>;
}

export default Profile;