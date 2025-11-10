import { useState, useEffect } from "react";

export default function TimerEffect(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("TimerEffect mounted")

        const timerId = setInterval(() => {
            setCount(prev => prev + 1)
        }, 1000);

        return () => {
            console.log("TimerEffect unmounted");
            clearInterval(timerId);
        };
    }, []);

    return (
        <div>
            <h1>TimerEffect Component</h1>
            <h2>Count: {count}</h2>
        </div>
    );
}