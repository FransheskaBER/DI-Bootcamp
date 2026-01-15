import { useState } from "react";
import { useAddTodo } from "../app/hooks";

export default function AddTodo() {
    const [title, setTitle] = useState("");
    const addTodo = useAddTodo();

    return (
        <>
        <h1>Add a new todo</h1>
        <div>
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter your task"/>
            <button onClick={() => { addTodo(title); setTitle(""); }}>Add Todo</button>
        </div>
        </>
    );    
}