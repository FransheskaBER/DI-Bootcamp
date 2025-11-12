import { useState } from "react";
export default function BuggyCounter(){
    const [counter, setCounter] = useState(0);

    function increment(){
        setCounter(prev => prev + 1);
    }

    if (counter === 5){
        throw new Error("CRASHED!")
    }

    return(
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={increment}>+</button>
        </div>

    );

}