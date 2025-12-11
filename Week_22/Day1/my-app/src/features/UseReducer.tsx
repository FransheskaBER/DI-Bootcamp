import { useReducer } from "react";

interface State {
    count: number;
};

type Action = 
    | { type: "increment" }
    | { type: "decrement" }
    | { type: "reset" };

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count -1 };
        case "reset":
            return { count: 0 };
        default:
            throw new Error("Unknown action");
    }
}

export default function UseReducer() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    return (
        <>
        <h1>Count: {state.count}</h1>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </>
    );
}