import { useState } from 'react'; 

export default function Counter(){
    const [count, setCount] = useState(0);

    function handleCount(){
        setCount(prev => prev + 1);
    }

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={handleCount}> + </button>
        </div>
    );
}