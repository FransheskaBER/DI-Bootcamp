import { login } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
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
        dispatch(login(form));
    }

    return(
        <>
        <h1>Log in to your account</h1>
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter your email"/>
            <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Enter your password"/>
            <button type="submit">Log in Now</button>
        </form>
        {error && (<p>{error}</p>)}
        <h4>Don't have an account yet? <Link to="/register">Go to the registration page</Link></h4>
        </>
    );
}