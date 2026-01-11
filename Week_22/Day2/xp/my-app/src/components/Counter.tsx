import { useState } from "react";

export default function Counter() {
    const [val, setVal] = useState<number>(0);

    return (
        <div>
            <h3>Counter: {val}</h3>
            <button onClick={() => setVal(prev => prev + 1)}>+</button>
            <button onClick={() => setVal(prev => prev -1)}>-</button>
        </div>
    );
}