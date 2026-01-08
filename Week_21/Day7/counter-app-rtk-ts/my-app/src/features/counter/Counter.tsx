import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByVal } from "./counterSlice.ts";
import type { RootState, AppDispatch } from "../../app/store.ts";
import { useState } from "react";

export default function Counter() {
    const [amount, setAmount] = useState<string>("");
    const value = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();

    function handleIncrementByVal() {
        const num = Number(amount);
        if (!Number.isFinite(num) || amount.trim() === "") return;
        dispatch(incrementByVal(num));
        setAmount("");
    }

    return (
        <div style={{ display: "grid", gap: 12, justifyItems: "center" }}>
            <h2> Counter: {value}</h2>

            <div style={{ display: "flex", gap: 10 }}>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
            <form onSubmit={(e) => {e.preventDefault(); handleIncrementByVal();}} style={{ display: "flex", gap: 8 }}>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter a number" />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}