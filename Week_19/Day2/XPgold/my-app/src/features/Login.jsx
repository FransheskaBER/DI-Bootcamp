import { loginUser, setUser } from "./authSlice.js";
import { useDispatch } from "react-redux";
import { useState } from "react";


export default function Login() {
    const [form, setForm] = useState({ name: "", email: "", password: "" })
    const dispatch = useDispatch();

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();  
        dispatch(loginUser());
        dispatch(setUser(form));
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm space-y-6">   
                <h2 className="text-2xl font-bold text-center text-gray-800">Welcome Back</h2>
                <div>
                    <label className="block text-gray-600 mb-1">Name:
                        <input
                            type="text"
                            name= "name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="e.g., fransheska"/>
                    </label>
                </div>
                <div>
                    <label className="block text-gray-600 mb-1">Email:
                        <input
                            type="email"
                            name= "email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="you@example.com"/>
                    </label>
                </div>
                <div>
                    <label className="block text-gray-600 mb-1">Password:
                        <input
                            type="password"
                            name= "password"
                            value={form.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="••••••••"/>
                    </label>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                    Log in
                </button>
            </form>
        </div>
    );
}