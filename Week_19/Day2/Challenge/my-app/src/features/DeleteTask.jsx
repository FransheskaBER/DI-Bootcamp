import { deleteTask } from "./plannerSlice.js";
import { useDispatch } from "react-redux";

export default function DeleteTask({ id }) {
    const dispatch = useDispatch();

    function handleDelete(){
        dispatch(deleteTask(id));
    }

    return (
        <button onClick={handleDelete}>Delete Task</button>
    );
}