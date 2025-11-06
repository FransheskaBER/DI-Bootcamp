import { useEffect, useState } from "react";

export default function EffectDemo(){
    const [count, setCount] = useState(0);

    // run after first render and every time count changes
    useEffect(() => {
        document.title = `Click: ${count}`;
        return () => {
            document.title = 'My React App';
        };
    }, [count]); // dependency array - rerun when 'count' changes

    return (
        <div style={{ marginBottom: 16 }}>
            <h2>EffectDemo</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count => count + 1)}>+1</button>
            <button onClick={() => setCount(0)} style={{ marginLeft: 8 }}>Reset Button</button>
        </div>
    );
}