import axios from "axios";
import { useState } from "react";

export default function Exercise2(){
    const [form, setForm] = useState({ id: "", title: "", body: "" });

    function handleChange(e){
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(e){
        e.preventDefault();
        try {
            const res = await axios.post(`https://jsonplaceholder.typicode.com/posts`, form);
            if (res.status >=400) throw new Error(`Request failed: ${res.status}`);
            const data = res.data;
            console.log(data);
        } 
        catch(err){
            console.log(err) ;
        }
    }

    return (
        <form onSubmit={handleSubmit} style={{ padding: "20px", display: "grid", justifyItems: "center", gap: "15px" }}>
            <h1>Exercise 2</h1>
            <input type="text" placeholder="Enter your id" name="id" value={form.id} onChange={handleChange} />
            <input type="text" placeholder="Enter a title" name="title" value={form.title} onChange={handleChange} />
            <input type="text" placeholder="Enter a body" name="body" value={form.body} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
}