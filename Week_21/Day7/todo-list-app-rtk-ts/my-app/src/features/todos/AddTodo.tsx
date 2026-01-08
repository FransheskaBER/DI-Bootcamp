import { useAppDispatch } from "../../app/hooks.ts";
import { addTodo } from "./todoSlice.ts";
import React, { useState } from "react";

export default function AddTodo() {
    const [text, setText] = useState<string>("");
    const [dueDate, setDueDate] = useState<string>("");
    const dispatch = useAppDispatch();

    function handleAddTodo(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const title = text.trim();
        if (title === "") return;
        const dueDateMs = dueDate.trim() === "" ? null : new Date(`${dueDate}T23:59:59`).getTime();

        dispatch(addTodo(title, dueDateMs));
        setText("");
        setDueDate("");
    };

    return (
    <div>
        <h2>Add New Todo</h2>
        
        <form onSubmit={handleAddTodo}>
            <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter a new task"/>
            <button type="submit">Add</button>
        </form>
    </div>
    );
}

