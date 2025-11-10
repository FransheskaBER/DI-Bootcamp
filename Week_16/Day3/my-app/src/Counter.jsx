import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);

    function increaseCount(){
        setCount(prev => prev + 1);
    }

    function decreaseCount(){
        setCount(prev => prev - 1);
    }

    return (
        <div>
            <h1>Current count: {count}</h1>
            <button type="button" onClick={increaseCount}>Increase Count</button>
            <button type="button" onClick={decreaseCount}>Decrease Count</button>
        </div>
    );
}