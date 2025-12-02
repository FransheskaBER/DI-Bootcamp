import { useSelector, useDispatch } from "react-redux";
import { selectFilter, selectFilteredTodos, selectFilteredTodosCount, setFilter, removeTodo, completeTodo } from "./todoSlice.js";
import { useCallback } from "react";
import RemoveTodo from "./RemoveTodo.jsx";
import CompleteTodo from "./CompleteTodo.jsx";

export default function TodoList() {
    const filter = useSelector(selectFilter);
    const filteredTodos = useSelector(selectFilteredTodos);
    const totalTodos = useSelector(selectFilteredTodosCount);
    const dispatch = useDispatch();

    const handleRemove = useCallback(
        (id) => {
            dispatch(removeTodo(id));
        },
        [dispatch]
    );

    const handleComplete = useCallback(
        (id) => {
            dispatch(completeTodo(id));
        },
        [dispatch]
    );


    return (
        <>
        <h1>See Your Todo List</h1>
        <select value={filter} onChange={(e) => dispatch(setFilter(e.target.value))}>
            <option value="All">All</option>
            <option value="Done">Done</option>
            <option value="Undone">Undone</option>
        </select>
        <div>
            <h2>{filter} Todos: </h2>
            {filteredTodos.map(todo => (
                <div>
                    <CompleteTodo checked={todo.done} handleChange={() => handleComplete(todo.id)}/>
                    <p key={todo.id}>{todo.title}</p>
                    <RemoveTodo handleRemove={() => handleRemove(todo.id)} />
                </div>
            ))}
            <h3>Total Number of todos: {totalTodos}</h3>
        </div>
        </>
    );

}