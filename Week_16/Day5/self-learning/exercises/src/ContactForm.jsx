import { useState } from "react";
import InputWithLabel from "./InputWithLabel.jsx";

export default function ContactForm(){
    const [form, setForm] = useState({ name: "", email:"", message: "" });

    function handleChange(e){
        setForm({ ...form, [e.target.id]: e.target.value })
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(form);
        setForm({ name: "", email:"", message: "" }) // to reset your form
    }

    return (
        <form onSubmit={handleSubmit}>
            <InputWithLabel id="name" label="Name" type="text" value={form.name} onChange={handleChange} />
            <InputWithLabel id="email" label="Email" type="email" value={form.email} onChange={handleChange}/>
            <InputWithLabel id="message" label="Message" type="textarea" value={form.message} onChange={handleChange}/>
            <button>Submit</button>
        </form>
    );
}