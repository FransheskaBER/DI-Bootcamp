import { useDispatch } from "react-redux";
import { removeTodo } from "../store/todoSlice.js";

export default function RemoveTask({ catId, todoId }){
    const dispatch = useDispatch();

    function handleRemove(){
        dispatch(removeTodo({ catId, todoId }));
    }

    return (
        <button onClick={handleRemove}>Remove Task</button>
    );
}