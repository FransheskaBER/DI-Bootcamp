import { editTask } from "./plannerSlice.js";
import { useDispatch } from "react-redux";
import { useState } from "react";
import DeleteTask from "./DeleteTask.jsx";

export default function EditTask({ taskId, title, completed }) {
    const [editable, setEditable] = useState(false);
    const [textTitle, setTextTitle] = useState(title);
    const [done, setDone] = useState(completed);
    const dispatch = useDispatch();

    function handleClick() {
        if (!editable) {
            setEditable(true);
            return;
        }
        dispatch(editTask({ taskId, updates: { task: textTitle, done} }));
        setEditable(false);
    }

    return (
        <>
        <input type="checkbox" checked={done} onChange={(e) => {
            const newDone = e.target.checked;
            setDone(newDone);
            dispatch(editTask({ taskId, updates: { done: newDone } }));
        }} />
        {editable ? (
            <input type="text" value={textTitle} onChange={(e) => setTextTitle(e.target.value)} />
        ) : (
            <p>{title}</p>
        )}
        <button onClick={handleClick}>{editable ? "Save Changes" : "Edit Text"}</button>
        <DeleteTask id={taskId}/>
        </>
    )

}