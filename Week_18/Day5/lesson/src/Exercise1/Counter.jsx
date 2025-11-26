import { useDispatch, useSelector } from "react-redux";
import { increment } from './counterSlice.js';

const CounterComponent = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <>
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        </>
    );
};

export default CounterComponent;