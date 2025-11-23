// It is a little box that you can store STH and React wont re-render when that "STH" changes.
// It is great for: DOM elements, timers, previous values, counters that shoudn't re-render the UI, avoiding global variables.
// You can use it to remember sth without React re-rendering everything

// example with DOM reference
import { useRef } from "react";
export function InputFocus() {
    const inputRef = useRef();

    function focusInput() {
        inputRef.current.focus();
    }

    return (
        <>
        <input ref={inputRef}></input>
        <button onClick={focusInput}>Focus</button>
        </>
    );
}

// Value that shoudnt cause re-render
export function Counter2() {
    const countRef = useRef(0);

    // the UI never re-renders but the numbers still updates.
    function increase() {
        countRef.current++;
        console.log("Count (no render):", countRef.current);
    }

    return <button onClick={increase}>Increase</button>
}