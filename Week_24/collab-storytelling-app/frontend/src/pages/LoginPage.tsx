import { useState, type FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { setCredentials } from "../features/authSlice";
import { loginUser } from "../services/api";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const data = await loginUser(email, password);
            dispatch(setCredentials({ user: data.user, accessToken: data.accessToken }));
            navigate('/');
        } catch (error: any) {
            setError(error.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    }
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-2xl mb-4">Login</h2>
                    
                    {error && (
                        <div className="alert alert-error mb-4">
                            <span>{error}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="input input-bordered"/>
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required className="input input-bordered"/>
                        </div>
                        <div>
                            <button type="submit" disabled={loading} className={`btn btn-primary w-full ${loading ? 'loading' : ''}`}>
                                {loading ? 'Loggin in...' : 'Login'}
                            </button>
                        </div>
                    </form>

                    <p className="text-center mt-4">
                        Don't have an account?
                        <Link to='/signup' className="link link-primary">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}