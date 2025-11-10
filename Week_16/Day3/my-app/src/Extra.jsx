import { useState, useEffect } from "react";

export default function Extra(){
    const [text, setText] = useState("");


    useEffect(() => {
        console.log("Component Mounted");
        return () => console.log("Component Unmounted");
    }, []);

    useEffect(() => {
        console.log("Component Updated");
    }, [text]);

    return (
        <div>
            <h1>Extra Component</h1>
            <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)} />
            <p>You typed: {text}</p>
        </div>
    );
}