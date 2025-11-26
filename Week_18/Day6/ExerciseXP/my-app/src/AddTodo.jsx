import { useDispatch } from "react-redux";
import { add } from "./store/todoSlice";
import { useState } from "react";

export default function AddTodo() {
    const [text, setText] = useState("");

    // get the dispatch function
    const dispatch = useDispatch();

    function handleClick(){
        if (!text.trim()) return;

        const newTask = {
            id: Date.now(),
            title: text,
            completed: false,
        }

        dispatch(add(newTask))
        setText("");
    }
    return (
        <>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handleClick}>Add Task</button>
        </>

    );
}