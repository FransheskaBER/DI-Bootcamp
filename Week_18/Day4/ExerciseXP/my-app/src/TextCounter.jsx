import { useRef, useState } from "react";

export default function TextCounter(){
    const inputRef = useRef(null);
    const [count, setCount] = useState(0);

    function handleInput(){
        const length = inputRef.current.value.length;
        setCount(length);
        console.log("Current Character: ", length);
    }

    return (
        <>
        <input type="text" ref={inputRef} onChange={handleInput}/>
        <p>Characters: {count}</p>
        </>
    )
}