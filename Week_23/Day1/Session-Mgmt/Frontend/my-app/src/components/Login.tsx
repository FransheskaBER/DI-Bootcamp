import { useState } from "react"
import { useAuth } from "../auth/AuthContext"

export default function Login() {
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    
    return (
        <div style={{ display: "grid", gap: 8, maxWidth: 360 }}>
            <h3>LOG IN</h3>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="example@email.com" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="secret123" />
            <button
                onClick={async () => {
                    setError(null);
                    try {
                        await login(email, password);
                    } catch {
                        setError("Login failed");
                    }
                }}>
                Log in
            </button>
            {error && <p style={{ color: "crimson" }}>{error}</p>}
        </div>
    )
}