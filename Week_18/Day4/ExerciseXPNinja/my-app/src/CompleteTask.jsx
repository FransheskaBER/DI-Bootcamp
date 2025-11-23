import { useContext } from "react";
import { TasksContext } from "./TasksManager.jsx";

export default function CompleteTask({ id, completed }){
    const { handleCompletion } = useContext(TasksContext);

    return (
        <input
        type="checkbox"
        checked={completed}
        onChange={() => handleCompletion(id)}
        />    
    );
}