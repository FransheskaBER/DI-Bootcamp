import { useState, useEffect } from "react";

function Message(){
    useEffect(() => {
        console.log("Message mounted");
        return () => {
            console.log("Message unmounted");
        };
    }, []);

    return <p>Hello from React!</p>
}

export default function ToggleMessage(){
    const [message, setMessage] = useState(true);

    function handleChange(){
        setMessage(prev => !prev);
    }

    return (
        <div>
            {message && <Message />}
            <button onClick={handleChange}>{message ? "Hide Message" : "Show Message"}</button>
        </div>
    );
}