import { useDispatch } from "react-redux";
import { remove } from "./store/todoSlice";

export default function RemoveTodo({ id }) {
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(remove(id))}>Remove Task</button>
    );
}