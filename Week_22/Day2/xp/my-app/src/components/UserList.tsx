import { useEffect, useState } from "react";


interface Address {
    street: string;
    city: string;
    zipcode: string;
}

interface User {
    id: number;
    name: string;
    username: string;
    address: Address;
    phone: string;
    website: string;
}

export default function UserList() {
    const [data, setData] = useState<User[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
        
                if (!res.ok) throw new Error('Failed to fetch users data');

                const users = await res.json();

                // to add delay
                await new Promise(resolve => setTimeout(resolve, 2000));
                setData(users);       
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }        
        };
        fetchUsers();
    }, []);

    if (loading) return <div>Loading....</div>
    if (error) return <div>Error: {error}</div>

    return (
        <>
        <h1>Users:</h1>
        {data && data.map((u) => (
            <div key={u.id}>
                <p>Name: {u.name}</p>
                <p>Username: {u.username}</p>
                <p>Address: {u.address.street}, {u.address.city} {u.address.zipcode}</p>
                <p>Phone: {u.phone}</p>
                <p>Website: {u.website}</p>
                <hr />
            </div>
        ))}
        </>
    );
}