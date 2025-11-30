import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice.js";

export default function AddTodo() {
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();

    function handleAdd() {
        const newTask = {
            id: Date.now(),
            title,
            done: false,
        }
        dispatch(addTodo(newTask));
        console.log(newTask);
        setTitle("");
    }

    return (
        <>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Add your to-do task" />
        <button onClick={handleAdd}>Add</button>
        </>
    );
}