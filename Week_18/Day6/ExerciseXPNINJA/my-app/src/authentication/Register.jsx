import { register } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Register() {
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { access, error } = useSelector(state => state.auth)

    useEffect(() => {
        if (access) navigate("/todosmgnt");
    }, [access, navigate]);

    function handleChange(e){
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }))
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(register({ ...form, id: Date.now() }));
    }
    
    return (
        <>
        <h1>Registration</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name"/>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter your email"/>
            <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Enter your password"/>
            <button type="submit">Register Now</button>
        </form>
        {error && (<p>{error}</p>)}
        <h4>Already have an account? <Link to="/login">Go to the login page</Link></h4>
        </>
    );
};