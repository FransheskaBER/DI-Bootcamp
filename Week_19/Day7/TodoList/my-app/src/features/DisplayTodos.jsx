import { selectActiveTodos, selectCompletedTodos, selectAllTodos } from "./todoSlice.js";
import { useSelector } from "react-redux";
import { useState, useCallback } from "react";
import FilterTodo from "./FilterTodo.jsx";
import AddTodo from "./AddTodo.jsx";
import RemoveTodo from "./RemoveTodo.jsx";


export default function DisplayTodos() {
    const [filter, setFilter] = useState("");
    const [appliedFilter, setAppliedFilter] = useState("");
    const activeTodos = useSelector(selectActiveTodos);
    const doneTodos = useSelector(selectCompletedTodos);
    const allTodos = useSelector(selectAllTodos);

    const handleChange = useCallback((e) => {
        setFilter(e.target.value);
    }, []);

    let displayedTodos = allTodos;
    if (appliedFilter === "true") {
        displayedTodos = doneTodos;
    } else if (appliedFilter === "false") {
        displayedTodos = activeTodos;
    }

    const handleFilter = useCallback(() => {
        setAppliedFilter(filter);
    }, [filter]);

    return (
        <>
        <h1>Todo List Manager</h1>
        <AddTodo />
        <hr />
        <FilterTodo filter={filter} handleChange={handleChange} handleFilter={handleFilter}/>
        {displayedTodos.length > 0 && (
            <>
            {displayedTodos.map(t => (
                <div key={t.id}>
                    <h4>{t.title}</h4>
                    <p>Status: {t.completed ? "Completed" : "Active"}</p>
                    <RemoveTodo todoId={t.id}/>
                </div>
            ))}
            </>
        )}
        </>
    );
}