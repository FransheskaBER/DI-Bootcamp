import { useDispatch, useSelector } from "react-redux";
import { addTask, selectAllCats } from "../trackerSlice.js";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { DEFAULT_CAT_ID } from "../../data.js";

export default function AddTask() {
    const [form, setForm] = useState({ id: uuidv4(), title: "", completed: false, categoryId: DEFAULT_CAT_ID, date: "", progress: 0 })
    const dispatch = useDispatch();
    const allCats = useSelector(selectAllCats);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(addTask(form));
        setForm({ id: uuidv4(), title: "", completed: false, categoryId: DEFAULT_CAT_ID, date: "", progress: 0 });
    }

    return (
        <>
        <div>
            <h3>Add a new task:</h3>
            <form onSubmit={handleSubmit} style={{ display: "flex", gap: "25px", alignItems: "center", flexDirection: "column" }}>
                <input name="title" value={form.title} onChange={handleChange} type="text" placeholder="Title" />
                <label>Choose a date: <input name="date" value={form.date} onChange={handleChange} type="date" /></label>
                <label>Set your progress: <input name="progress" value={form.progress} onChange={handleChange} type="number" min={0} max={100}/></label>
                <label>Choose a category: <br /> 
                    <select name="categoryId" value={form.categoryId} onChange={handleChange} >
                    {allCats.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                    </select>
                </label>
                <button type="submit">Add Task</button>
            </form>
        </div>
        </>
    );

}