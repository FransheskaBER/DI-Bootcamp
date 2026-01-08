import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { logout, updateProfile } from "../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

export default function Profile() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { user, isAuthenticated, status, error } = useAppSelector((state) => state.auth);

    const [username, setUsername] = useState("");
    const [bio, setBio] = useState("");

    // if user logs out (or token expires) kick them to login
    useEffect(() => {
        if (!isAuthenticated) navigate("/login", { replace: true });
    }, [isAuthenticated, navigate]);

    // when user arrives or is changing sth, fill the form fields
    useEffect(() => {
        if (user) {
            setUsername(user.username);
            setBio(user.bio);
        }
    }, [user]);

    async function handleSave(e: React.FormEvent) {
        e.preventDefault();
        await dispatch(updateProfile({ username, bio }));
    }

    async function handleLogout() {
        await dispatch(logout());
        // navigation will happen via the effect if isAuth becomes false
    }

    if (!user) {
        // this can happen briefly while auth is loading
        return <p>Loading Profile...</p>;
    }

    return (
        <div>
            <h2>Profile</h2>

            <div>
                <p>ID: {user.id}</p>
                <p>Email: {user.email}</p>
                <p>Created: {user.created_at}</p>
            </div>

            <form onSubmit={handleSave}>
                <label>Username
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </label>

                <label>Bio
                    <textarea value={bio} onChange={(e) => setBio(e.target.value)} rows={4}/>
                </label>

                <button disabled={status === "loading"} type="submit">
                    {status === "loading" ? "Saving" : "Save Changes"}
                </button>

                {error && <p style={{ color: "crimson" }}>{error}</p>}
            </form>

            <div>
                <button type="button" onClick={handleLogout} disabled={status === "loading"}>
                    Logout
                </button>
            </div>
        </div>
    );
}