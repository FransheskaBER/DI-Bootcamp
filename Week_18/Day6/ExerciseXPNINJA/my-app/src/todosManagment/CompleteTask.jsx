import { useState } from "react";
import { completeTodo } from "../store/todoSlice";
import { useDispatch } from "react-redux";


export default function CompleteTask({ catId, todoId, completed }) {
    const [taskCompletion, setTaskCompletion] = useState(completed);
    const dispatch = useDispatch();

    function handleChange(e) {
        setTaskCompletion(e.target.value);
        dispatch(completeTodo({ catId, todoId }))
    }

    return (
        <input type="checkbox" value={taskCompletion} onChange={handleChange} />
    );
}