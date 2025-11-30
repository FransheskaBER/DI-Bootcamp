import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "./todoSlice.js";
import { useState } from "react";

export default function TodoItem({ task }) {
    const dispatch = useDispatch();
    const completed = task.done;

    function handleChange() {
        dispatch(toggleTodo(task.id))
    }

    function handleRemove() {
        dispatch(removeTodo(task.id))
    }

    return (
        <div className="todo-row">
            <label className="switch">
                <input
                type="checkbox"
                checked={completed}
                onChange={handleChange}
                />
                <span className="slider"></span>
                <span style={completed? { textDecoration: "line-through" } : undefined}>{task.title}</span>
            </label>

            <button onClick={handleRemove}>Remove Task</button>
        </div>
    );
}