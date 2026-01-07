import { useAuth } from "../auth/AuthContext";
import Login from '../components/Login.tsx'
import Logout from '../components/Logout.tsx';
import Register from '../components/Register.tsx';

export default function AuthGate() {
    const { user, loading } = useAuth();
    
    if (loading) return <p>Loading session...</p>;

    if (!user) {
        return (
            <div style={{ display: "grid", gap: 16 }}>
                <Register />
                <Login />
            </div>
        )
    }

    return (
        <div style={{ display: "grid", gap: 8 }}>
            <p>Logged in as userId: {user.userId}</p>
            <Logout />
            <p>Refresh the page — you should stay logged in.</p>
        </div>
    )
}