import { UsernameContext } from "./ComponentA.jsx";
import { useContext } from "react";

export default function DisplayUsername() {
    const username = useContext(UsernameContext);
    return <h1>Username is: {username}</h1>;
}