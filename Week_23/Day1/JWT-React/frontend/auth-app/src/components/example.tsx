import { useAuth } from "../auth/AuthContext";

function ProfileGate() {
    const { isAuthed, loading, refreshAuth } = useAuth();

    if (loading) return <p>Checking session…</p>;
    if (!isAuthed) return <p>Please log in.</p>;

    return (
        <>
        <p>Welcome back.</p>
        <button onClick={refreshAuth}>Re-check session</button>
        </>
    );
}