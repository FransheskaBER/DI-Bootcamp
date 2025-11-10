import { useState, useEffect } from "react";

export default function AutoMessage(){
    const messages = ["Learning React", "Understanding render", "Hooks are fun!"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const msgID = setInterval(() => {
            setIndex(prev => (prev + 1) % messages.length)
        }, 3000);

        return () => clearInterval(msgID);
    }, []);

    return (
        <div>
            <h1>New Message: {messages[index]}</h1>
        </div>
    );
}