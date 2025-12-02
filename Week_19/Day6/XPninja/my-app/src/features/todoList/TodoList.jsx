import { useSelector, useDispatch } from "react-redux";
import { selectFilter, selectFilteredTodos, selectFilteredTodosCount } from "./todoSlice.js";
import { setFilter } from "./todoSlice.js";

export default function TodoList() {
    const filter = useSelector(selectFilter);
    const filteredTodos = useSelector(selectFilteredTodos);
    const totalTodos = useSelector(selectFilteredTodosCount);
    const dispatch = useDispatch();

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
                <p key={todo.id}>{todo.title}</p>
            ))}
            <h3>Total Number of todos: {totalTodos}</h3>
        </div>
        </>
    );

}