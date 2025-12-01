import { addTask } from "./plannerSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";


export default function AddTask({ selectedDate }) {
    const [taskTitle, setTaskTitle] = useState("");
    const dispatch = useDispatch();

    function handleSubmit() {
        console.log("submitting task..", taskTitle, selectedDate);
        
        const newTask = {
            id: Date.now(),
            task: taskTitle,
            date: selectedDate.toISOString(),
            done: false,
        }
        dispatch(addTask(newTask));
        setTaskTitle("");
    }

    return (
        <div>
            <label>Enter a new task: 
                <input type="text" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
            </label>
            <button onClick={handleSubmit}>Add Task</button>
        </div>
    );
}