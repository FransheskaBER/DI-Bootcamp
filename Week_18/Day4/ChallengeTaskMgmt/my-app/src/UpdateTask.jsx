import { TasksContext } from "./TaskMgmnContext.jsx";
import { useContext, useState } from "react";

export default function UpdateTask({ id, title, completed }){
    const { editTask, completeTask, removeTask } = useContext(TasksContext);
    const [newTitle, setNewTitle] = useState(title);
    const [editTitle, setEditTitle] = useState(false);

    function handleSave() {
        if (!newTitle.trim()) return;
        editTask(id, newTitle);
        setEditTitle(false);
    }

    function newEdit() {
        setEditTitle(true);
        setNewTitle(title);
    }

    return (
        <>
        <div className="taskRow">
            <button type="button" onClick={() => removeTask(id)}>X</button>
            <label className="taskTitle">
                <input type="checkbox" checked={completed} onChange={() => completeTask(id)}/>
                {editTitle ? (<input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/>) : (newTitle)}
            </label>
            {editTitle ? (<button onClick={handleSave}>Save Changes</button>) : (<button type="button" onClick={newEdit}>Edit Task</button>)}
        </div>
        </>
    );


}