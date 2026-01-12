import { useRef, useEffect } from "react";

export default function InputFocus() {
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    function handleClick() {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    return (
        <>
        <h1>useRef DOM Exercise</h1>
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={handleClick}>Focus Input</button>
        </div>
        </>
    );
}