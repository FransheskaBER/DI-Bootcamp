import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import type { RootState } from "../../app/store";
import { increment, decrement, incrementByAmount, reset } from "./counterSlice";

export default function Counter() {
    const count = useSelector((state: RootState) => state.counter.counter);
    const dispatch = useDispatch();
    const [input, setInput] = useState("");

    return (
        <>
        <h2>Count: {count}</h2>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>Reset</button>

        <div>
            <h3>Increment By Value</h3>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={() => dispatch(incrementByAmount(Number(input) || 0))}>Add</button>
        </div>
        </>
    );
}
