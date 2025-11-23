// This is an alternative for useState, when state becomes messy.
// so instead of updating the state itsel directly with setState(),
// you will send an action, and a REDUCER FUNCTION will decide what the new state should be.
// The useReducer is helpful when you have big, structured, multi-step STATE changes.

// Example:
import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        default:
            return state;
    }
}

export default function Counter() {
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <>
        <p>Count: {count}</p>
        {/* // You don't update the state yourself, you describe what should happen and the REDUCER handles it. */}
        <button onClick={() => dispatch({ type: "increment" })}>+</button> 
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        </>
    );
}

