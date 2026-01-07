import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";


const BASE_URL = import.meta.env.VITE_API_BASE_URL;


export default function Register() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState<string | null>(null);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    const navigate = useNavigate();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // console.log(form.email, form.password);
        setError(null);

        try {
            const response = await axios.post(
                // url
                `${BASE_URL}/api/user/register`,
                // body
                { email: form.email, password: form.password },
                // header
                { withCredentials: true } // we keep the cookie
            )
            console.log(response.data);
            navigate("/login");
        } catch (error) {
            console.log(error);
            if (axios.isAxiosError(error)) {
                setError(error.response?.data?.message || "Register failed")
            } else {
                setError("Register failed");
            }
        }
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input name="email" value={form.email} type="text" placeholder="email" onChange={handleChange}/>
                <input name="password" value={form.password} type="text" placeholder="password" onChange={handleChange}/>
                <button>Register Now</button>
            </form>
            <p>{error}</p>
        </div>
    )
};