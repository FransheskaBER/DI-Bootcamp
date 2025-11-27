import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice.js";
import { useState } from "react";

export default function({ catId }) {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    function handleClick(){
        if (!text) return;

        const newTodo = {
            id: Date.now(),
            title: text,
            completed: false,
        }

        dispatch(addTodo({ catId, newTodo }));
        setText("");
    }

    return (
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={handleClick}>Add</button>
        </div>
    );
}