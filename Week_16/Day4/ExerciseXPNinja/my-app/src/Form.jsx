import { useState } from 'react';
import './Form.css';
import Input from './Input.jsx';

export default function Form(){
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const validators = {
        required: (value, label) => (!value.trim() ? `${label} is required.` : null),
        email: (value) => !/\S+@\S+\.\S+/.test(value) ? "Please enter a valid email." : null,
        phone: (value) => !/^\+?[1-9]\d{7,14}$/.test(value) ? "Please enter a valid phone." : null,
    }

    return (
        <div>
            <form className='myform'>
                <Input 
                label="First Name"
                name="firstname"
                value={firstName}
                onChange={(e) => setFirstname(e.target.value)}
                validate={(value) => validators.required(value, "First Name")}
                />
                <Input 
                label="Last Name"
                name="lastname"
                value={lastName}
                onChange={(e) => setLastname(e.target.value)}
                validate={(value) => validators.required(value, "Last Name")}
                />
                <Input 
                label="Phone Number"
                name="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                validate={(value) => 
                    validators.required(value, "Phone Number") || validators.phone(value)}
                />
                <Input 
                label="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                validate={(value) => 
                    validators.required(value, "Email") || validators.email(value)}
                />
            </form>
        </div>
    );
}