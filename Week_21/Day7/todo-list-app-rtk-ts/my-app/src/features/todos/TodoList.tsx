import { updateTodo, deleteTodo, setFilter, type TodosFilter } from "./todoSlice.ts";
import { useAppDispatch, useAppSelector } from "../../app/hooks.ts";
import { selectFilteredTodos } from "./selectors.ts";
import { useEffect, useState } from "react";

export default function TodoList() {
    const [now, setNow] = useState(() => Date.now());
    const filter = useAppSelector((state) => state.todos.filter);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const id = setInterval(() => setNow(Date.now()), 60_000); // update every minute
        return () => clearInterval(id);
    }, [])
    
    const filteredTodos = useAppSelector((state) => selectFilteredTodos(state, now));

    function formatDate(ms: number) {
        return new Date(ms).toLocaleDateString();
    }

    function isOverdue(ms: number | null, completed: boolean) {
        return ms !== null && ms < now && !completed;
    }

    return (
        <div>
            <h1>Your Todo-List</h1>

            <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                {
                    (["all", "completed", "incomplete", "overdue"] as TodosFilter[]).map((f) => (
                        <button key={f} onClick={() => dispatch(setFilter(f))} style={{ fontWeight: filter === f ? "bold" : "normal" }}>
                        {f}
                        </button>
                    ))
                }
            </div>

            {
                filteredTodos.map((item) => (
                    <div key={item.id} style={{ padding: 8, marginBottom: 8, border: "1px solid #ddd", borderRadius: 8, background: isOverdue(item.dueDate, item.completed) ? "#ffe5e5" : "transparent" }}>
                        <label style={{ textDecoration: item.completed ? "line-through" : "none" }}>
                            <input type="checkbox" checked={item.completed} onChange={() => 
                                dispatch(updateTodo(item.id))
                                }/>
                            {item.title}
                        </label>

                        <div> Due: {""} {item.dueDate === null ? (
                            <span>-</span>
                        ) : (
                            <span>{formatDate(item.dueDate)} {isOverdue(item.dueDate, item.completed) ? "(Overdue)" : ""}</span>
                        )}
                        </div>
    
                        <button onClick={() => dispatch(deleteTodo(item.id))}>X</button>
                    </div>
                ))
            }
        </div>
    );
}