import { useState, useEffect } from "react";

export default function UsersApi(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchData(){
            try {
                const res = await fetch("http://localhost:5000/api/users");
                const data = await res.json();
                setUsers(data);
            } catch (err){
                console.log("Error: ", err);
            }
        }

        fetchData();
    }, []);

    return (
        <>
        <h1>Users</h1>
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.username}</li>
            ))}
        </ul>
        </>
    );
}