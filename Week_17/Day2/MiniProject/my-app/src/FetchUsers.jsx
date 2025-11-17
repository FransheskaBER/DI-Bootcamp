import { useState, useEffect } from "react";

export default function FetchUsers(){
    const [users, setUsers] = useState([]);
    const [itemsLoaded, setItemsLoaded] = useState(false);

    async function fetchApi(){
        try{
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            
            if (res.ok) {
                setItemsLoaded(true)
            } else {
                setItemsLoaded(false);
                throw new Error (`Failed request ${res.status}`);
            }

            const data = await res.json();
            setUsers(data);
            
        } catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchApi();
    }, [])


    return(
        <>
        <h1>List of users' names and emails</h1>
        <ul>
            {users.map(u => (
                <li key={u.id}>Name: {u.name} | Email: {u.email}</li>
            ))}
        </ul>
        <div>
            <p>{itemsLoaded ? "" : "Loading..."}</p>
        </div>

        <div>
            <h1>List of Users (Part III)</h1>
            {users.map(u => (
                <div key={u.id} style={{ marginBottom: "50px"}}>
                    <p style={{ margin: "2px 0" }}><strong>ID:</strong> {u.id}</p>
                    <p style={{ margin: "2px 0" }}><strong>Name:</strong> {u.name}</p>
                    <p style={{ margin: "2px 0" }}><strong>Username:</strong> {u.username}</p>
                    <p style={{ margin: "2px 0" }}><strong>Email:</strong> {u.email}</p>
                    <p style={{ margin: "2px 0" }}><strong>City:</strong> {u.city}</p>
                </div>
            ))}
        </div>
        </>
    );
}