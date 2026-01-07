import { useAuth } from "../auth/AuthContext"

export default function Logout() {
    const { logout } = useAuth();

    return (
        <button onClick={logout}>Log out</button>
    )
}