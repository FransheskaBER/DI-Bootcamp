import { useState } from 'react';
import './Form.css';

export default function Form2(){
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);

    function handleSubmitForm(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        setFirstname(formData.get("firstname"));
        setLastname(formData.get("lastname"));
        setPhone(formData.get("phone"));
        setEmail(formData.get("email"));

        setShowSuccess(true);
    }

    function handleReset(){
        setShowSuccess(false);
        setFirstname("");
        setLastname("");
        setPhone("");
        setEmail("");
        
    }

    let content;

    if (showSuccess) {
        content = (
            <div className="bookForm">
                <p>{lastname}, {firstname}</p>
                <p>{phone} || {email}</p>
                <button onClick={handleReset}>Reset</button>
            </div>
        );
    } else {
        content = (
            <div>
                <form className="bookForm" onSubmit={handleSubmitForm}>
                    <h1>Welcome!</h1>
                    <p>Please privide the information below.</p>
                    <input type="text" name='firstname' placeholder='First Name'/>
                    <input type="text" name='lastname' placeholder='Last Name'/>
                    <input type="text" name='phone' placeholder='Phone Number'/>
                    <input type="text" name='email' placeholder='Email'/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }

    return (
        <div>{content}</div>
    );
}