import { addTodo, selectTodosLength } from "./todoSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";


export default function AddTodo() {
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();
    const tLength = useSelector(selectTodosLength); 

    function handleAdd() {
        dispatch(addTodo({
            id: tLength + 1,
            title: title,
            completed: false,
        }));
        setTitle("");
    } 

    return (
        <>
        <h2>Add a New Todo</h2>
        <label>Title: <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} /></label>
        <button onClick={handleAdd}>Add</button>
        </>
    );
}