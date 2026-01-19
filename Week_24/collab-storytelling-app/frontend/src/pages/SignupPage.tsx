import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { setCredentials } from "../features/authSlice";
import { registerUser } from "../services/api";

export default function SignupPage() {
    const [form, setForm] = useState({ username: '', email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const data = await registerUser(form.username, form.email, form.password);
            dispatch(setCredentials({ user: data.user, accessToken: data.accessToken }));
            navigate('/');
        } catch (error: any) {
            setError(error.message || 'Registration failed');
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-2xl mb-4">Sign Up</h2>

                    {error && (
                        <div className="alert alert-error mb-4">
                            <span>{error}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input type="text" placeholder="johndoe" name="username" value={form.username} onChange={handleChange} required className="input input-bordered"/>
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="john@example.com" name="email" value={form.email} onChange={handleChange} required className="input input-bordered"/>
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="••••••••" name="password" value={form.password} onChange={handleChange} required minLength={6} className="input input-bordered"/>
                            <label className="label">
                                <span className="label-text-alt">At least 6 characters</span>
                            </label>
                        </div>
                        <div>
                            <button type="submit" disabled={loading} className={`btn btn-primary w-full ${loading ? 'loading' : ''}`}>
                                {loading ? 'Creating account...' : 'Sign Up'}
                            </button>
                        </div>
                    </form>

                    <p className="text-center mt-4">
                        Already have an account?{' '}
                        <Link to="/login" className="link link-primary">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}