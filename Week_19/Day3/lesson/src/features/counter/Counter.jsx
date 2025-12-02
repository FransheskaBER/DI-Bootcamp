import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, addByVal } from "./counterSlice.js";
import { useRef } from "react";

export default function Counter() {
    const count = useSelector(state => state.counterReducer.count);
    const dispatch = useDispatch();
    const num1 = useRef()
    const num2 = useRef()

    // const incrementIn5secs = () => {
    //     setTimeout(() => {
    //         dispatch(increment())
    //     }, 5 * 1000);
    // }

    return (
        <>
        <h2>Counter</h2>
        <h3>Count: {count}</h3>
        <button onClick={() => dispatch(increment())}> + </button>
        <button onClick={() => dispatch(decrement())}> - </button>
        <button onClick={() => dispatch(reset())}> Reset </button>
        <div>
            <input type="number" ref={num1} />
            <input type="number" ref={num2} />
            <button onClick={() => dispatch(addByVal({ a: num1.current.value, b: num2.current.value }))}>
                Add Input
            </button>
        </div>
        </>
    );
}