import { useRef } from "react";

export default function RefDemo(){
    const inputRef = useRef(null); // holds { current: <input DOM node> }

    function focusInput() {
        inputRef.current?.focus();
    }

    function logValue(){
        console.log('Current input value:', inputRef.current?.value); // read without rerender
        alert(`Value is: ${inputRef.current?.value || '(empty)'}`);
    }

    return (
        <div style={{ marginBottom: 16 }}>
            <h2>RefDemo</h2>
            <input ref={inputRef} placeholder="Type something..." />
            <button onClick={focusInput} style={{ marginLeft: 8 }}>Focus</button>
            <button onClick={logValue} style={{ marginLeft: 8 }}>Log Value</button>
        </div>
    );
}