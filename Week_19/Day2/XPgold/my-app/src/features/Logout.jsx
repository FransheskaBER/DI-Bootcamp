import { logoutUser } from "./authSlice.js";
import { useDispatch } from "react-redux";

export default function Logout() {
    const dispatch = useDispatch();

    function handleLogout() {
        dispatch(logoutUser());
    }
    return (
        <button onClick={handleLogout} className="w-30 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all">
            Log Out
        </button>
    );
}