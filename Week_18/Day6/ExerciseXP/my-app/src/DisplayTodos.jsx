import { useSelector } from "react-redux";
import CompleteTodo from "./CompleteTodo.jsx";
import RemoveTodo from "./RemoveTodo.jsx";

export default function DisplayTodos() {
    // read the todos from Redux state
    const todos = useSelector(state => state.todos); // state.todos because in store we use todos: todoReducer

    return (
        <>
            {todos.length > 0 ? (
                todos.map(task => (
                <div key={task.id}>
                    <CompleteTodo id={task.id} completed={task.completed}/>
                    <p className={`textInput ${task.completed ? "completed" : ""}`}>{task.title}</p>
                    <RemoveTodo id={task.id}/>
                </div>
                ))
            ) : (
                <div>
                    <h2>Add your first task.</h2>
                </div>
            )}
        </>
    );
}