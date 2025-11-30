import { add } from "./store/slice.js"
import { useDispatch} from "react-redux";
import { useState } from "react";

export default function AddTask({ date }) {
    const [form, setForm] = useState({ task: ""});
    const dispatch = useDispatch();

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value}));
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newTask = {
            id: Date.now(),
            title: form.task,
            date: date,
            done: false,
        };
        dispatch(add(newTask));    
        console.log(newTask);
        setForm({ task: ""});    
    };

    return (
        <>
        {date && (
            <form onSubmit={handleSubmit} className="taskForm">
                <label>Add a new task <input type="text" name="task" value={form.task} onChange={handleChange} /></label>
                <button type="submit">Add Task</button>
            </form>
        )}
        </>
    );
}