import { useContext, useState } from "react";
import { TasksContext } from "./TasksManager.jsx";

export default function AddTask(){
    const { handleAdd } = useContext(TasksContext);
    const [title, setTitle] = useState("");

    function handleSubmit() {
        const trimmedTitle = title.trim();
        if (!trimmedTitle) return;
        handleAdd({
            id: Date.now(),
            title: trimmedTitle,
            completed: false,
        });
        setTitle("");
    };

    return (
        <>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter new task"/>
        <button onClick={handleSubmit} disabled={!title.trim()}>Add Task</button>
        </>
    );
}