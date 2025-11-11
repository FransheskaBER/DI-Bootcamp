import { useEffect } from "react";
import { useState } from "react";

export default function Clock(){
    const [currentDate, setCurrentDate] = useState(new Date());

    function tick(){
        setCurrentDate(prev => new Date(prev.getTime() + 1000));
    }

    useEffect(() => {
        const interval = setInterval(() => {tick()}, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {currentDate.toLocaleTimeString()}.</h2>
        </div>
    );
}