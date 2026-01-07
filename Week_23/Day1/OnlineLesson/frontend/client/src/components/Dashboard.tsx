import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

type UserType = {
    id: number;
    email: string;
}

export default function Dashboard() {
    const [users, setUsers] = useState<UserType[]>([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        try {
            const res = await axios.get<UserType[]>(`${BASE_URL}/api/user/users`, {
                withCredentials: true, // send the cookies
            });
            setUsers(res.data);
            console.log(res.data);
            
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
        <h2>Your Dashboard</h2>
        {
            users.length > 0 && users.map((item) => (
                <div key={item.id}>{item.email}</div>
            ))
        }
        </>
    )
};