import { useState, useEffect } from "react";

export default function DynamicTimer(){
    const [count, setCount] = useState(0);
    const [speed, setSpeed] = useState(1000);

    useEffect(() => {
        console.log("Component mounted");
        const timer = setInterval(() => {
            setCount(prev => prev + 1)
        }, speed);

        return () => {
            console.log("Clearing old interval...");
            clearInterval(timer);
        }

    }, [speed]);

    return (
        <div>
            <h2>Count: {count}</h2>
            <input type="number" value={speed} onChange={(e) => setSpeed(Number(e.target.value))} />
        </div>
    );

}