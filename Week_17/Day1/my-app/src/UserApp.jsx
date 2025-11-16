import { Routes, Route, Link } from "react-router-dom";
import UserPage from "./UserPage.jsx";

export default function Users(){
    const users = ["fran", "pepper", "yotam"];

    return (
        <>
        <Routes>
            <Route path="/users" element={<div>Pick a user</div>} />
            <Route path="/user/:name" element={<UserPage />}/>
        </Routes>
        <nav>
            {users.map((user) => (
                <Link key={user} to={`/user/${user}`}>{user}</Link>
            ))}
        </nav>
        </>
    );

}
