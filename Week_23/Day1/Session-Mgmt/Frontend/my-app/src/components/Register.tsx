import { useState } from "react";
import { useAuth } from "../auth/AuthContext";

export default function Register() {
    const { register } = useAuth();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [msg, setMsg]= useState<string | null>(null);

    return (
        <div style={{ display: "grid", gap: 8, maxWidth: 360 }}>
            <h1>Register</h1>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="example@email.com"/>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="secret123" />
            <button
                onClick={async () => {
                    setMsg(null);
                    try {
                        await register(email, password);
                        setMsg("Registered ✅ Now log in.");
                    } catch {
                        setMsg("Register failed ❌");
                    }
                }}>
                Register
            </button>
            {msg && <p>{msg}</p>}
        </div>
    )
}