import { useState } from "react";

export default function Exercise1(){
    const [form, setForm] = useState({ name: "", email: "" });

    function handleChange(e){
        const { name, value } = e.target;
        setForm(prev => ({...prev, [name]: value}));
    }

    async function handleSubmit(e){
        e.preventDefault();

        try{
            const res = await fetch("https://jsonplaceholder.typicode.com/users/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if(!res.ok) throw new Error(`Request failed: ${res.status}`);
            const data = await res.json()
            console.log(data);
        } catch (err){
            console.log(err);
        }
    }

    return (
        <form onSubmit={handleSubmit} style={{ padding: "20px", display: "grid", justifyItems: "center", gap: "15px" }}>
            <h1>Exercise 1</h1>
            <input type="text" placeholder="Enter your name..." name="name" value={form.name} onChange={handleChange}/>
            <input type="text" placeholder="Enter your email..." name="email" value={form.email} onChange={handleChange} />
            <button type="submit">Add User</button>
        </form>
    );
}