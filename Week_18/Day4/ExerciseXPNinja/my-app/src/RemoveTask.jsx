import { useContext } from "react";
import { TasksContext } from "./TasksManager.jsx";

export default function RemoveTask({ id }){
    const { handleRemove } = useContext(TasksContext);
    return (
        <button onClick={() => handleRemove(id)}>Remove</button>
    );
}