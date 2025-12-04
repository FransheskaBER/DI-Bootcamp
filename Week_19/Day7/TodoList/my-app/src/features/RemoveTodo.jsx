import { removeTodo } from "./todoSlice.js"
import { useDispatch } from "react-redux";

export default function RemoveTodo({ todoId }) {
    const dispatch = useDispatch();

    function handleRemove() {
        dispatch(removeTodo(todoId));
    }

    return <button onClick={handleRemove}> X </button>
}