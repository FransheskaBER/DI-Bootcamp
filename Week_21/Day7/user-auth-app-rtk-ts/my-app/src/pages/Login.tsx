import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { login, register } from "../features/auth/authSlice.ts";
import { useAppDispatch, useAppSelector } from "../app/hooks.ts";

type Mode = "login" | "register";

export default function Login() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { isAuthenticated, status, error } = useAppSelector((state) => state.auth);

    const [mode, setMode] = useState<Mode>("login");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        // if already logged in, dont let the user sit on /login
        if (isAuthenticated) navigate("/profile", { replace: true });
    }, [isAuthenticated, navigate]);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (mode === "login") {
            await dispatch(login({ email, password }));
            return;
        }

        await dispatch(register({ email, username, password }));
    }

    return (
        <div>
            <h2>{mode === "login" ? "Login" : "Register"}</h2>

            <form onSubmit={handleSubmit}>
                <label>Email
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>

                {mode === "register" && (
                    <label>Username
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                    </label>
                )}

                <label>Password
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} required  />
                </label>

                <button type="submit" disabled={status === "loading"}>
                    {
                        status === "loading"
                            ? "Please wait..."
                            : mode === "login"
                            ? "Login"
                            : "Create Account"
                    }
                </button>
                {error && <p style={{ color: "crimson" }}>{error}</p>}
            </form>

            <div>
                <button type="button" onClick={() => setMode((m) => (m === "login" ? "register" : "login"))}>
                    Switch to {mode === "login" ? "Register" : "Login"}
                </button>
            </div>
        </div>
    );
}