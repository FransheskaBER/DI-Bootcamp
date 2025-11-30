import { edit } from "./store/slice";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

export default function EditTask({ task }) {
    const [done, setDone] = useState(task.done);
    const [editable, setEditable] = useState(false);
    const [currentTask, setCurrentTask] = useState(task.title);
    const dispatch = useDispatch();

    useEffect(() => {
        setDone(task.done);
        setCurrentTask(task.title);
    }, [task.done, task.title]);

    const handleToggleEdit = () => {
        if (!editable) {
            // Enter edit mode with the latest task values
            setCurrentTask(task.title);
            setDone(task.done);
            setEditable(true);
            return;
        }

        dispatch(edit({
            id: task.id,
            updates: {
                title: currentTask,
                done,
            }
        }));
        setEditable(false);
    };

    return (
        <>
        <input type="checkbox" checked={done} onChange={() => setDone(!done)} />
        {editable ? (
            <input type="text" value={currentTask} onChange={(e) => setCurrentTask(e.target.value)} />
        ) : (
            <p style={done ? { textDecoration: "line-through" } : undefined}>{task.title}</p>
        )}
        <button onClick={handleToggleEdit}>
            {editable ? "Save Changes" : "Edit Task"}
        </button>
        </>
    );
}
