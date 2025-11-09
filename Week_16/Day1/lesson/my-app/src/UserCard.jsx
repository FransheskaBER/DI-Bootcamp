import Button from '@mui/material/Button';

export default function UserCard({ name, email, username }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
            <h4>{username}</h4>
            <Button variant="contained">Click Me</Button>
        </div>
    )
}