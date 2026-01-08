import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "../app/hooks";

export default function PrivateRoute() {
    const { isAuthenticated, status, didInit } = useAppSelector((state) => state.auth);

    // while we are checking /me dont redirect ye
    if (status === "loading") {
        return <p>Loading...</p>
    }

    if (!didInit) return <p>Loading...</p>;

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
    //Outlet is where nested routes render. If not authenticated, we redirect.
}
