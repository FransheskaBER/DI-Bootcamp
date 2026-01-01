import type { RootState } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, removeTodo } from "./todoSlice";
import FilterTodo from "./FilterTodo";

export default function TodoList() {
    const todos = useSelector((state: RootState) => state.todos.todos);
    const dispach = useDispatch();

    return (
        <>
        <FilterTodo />
            {todos && todos.map(t => (
            <div key={t.id}>
                <label style={{ textDecoration: t.completed ? "line-through" : undefined}}>
                    <input type="checkbox" checked={t.completed} onChange={() => dispach(toggleTodo({ id: t.id }))}/>
                    {t.title}
                </label>
                <button onClick={() => dispach(removeTodo({ id: t.id}))}>X</button>
                <p>Due Date: {t.dueDate}</p>
                {t.dueDate && new Date(t.dueDate).getTime() < Date.now() && (
                    <p style={{ color: "red" }}>Task Overdue</p>
                )}
            </div>
            ))}
        </>
    );
    
}