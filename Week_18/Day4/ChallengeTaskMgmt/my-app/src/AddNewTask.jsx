import { TasksContext } from "./TaskMgmnContext.jsx";
import { useContext, useState } from "react";

export default function AddNewTask(){
    const { addTask } = useContext(TasksContext);
    const [title, setTitle] = useState("");

    function handleClick(){
        const trimTitle = title.trim();
        if (!trimTitle) return;

        addTask({
            id: Date.now(),
            title: trimTitle,
            completed: false
        });

        setTitle("");
    }

    return (
        <>
        <div className="taskRow">
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g., Study for final exams"/> 
            <button type="button" onClick={handleClick}>
                Add New Task
            </button>
        </div>
        </>
    );
}