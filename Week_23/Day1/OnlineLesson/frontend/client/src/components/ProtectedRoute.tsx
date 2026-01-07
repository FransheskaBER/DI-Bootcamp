import { useEffect, type ReactNode } from "react"
import { useAuth } from "../auth/useAuth.tsx";
// import { Navigate, useLocation } from "react-router";

type Props = {
    children: ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
    const { isAuth, refreshToken } = useAuth();

    useEffect(() => {
        refreshToken();
    }, []);

    if (!isAuth) {
        return <h2>User not logged in</h2>
    }
    return children;
};