import { useFilteredTodos, useRemoveTodo, useToggleTodo, useFilter, useTodos } from "../app/hooks";


export default function ListTodos() {
    const removeTodo = useRemoveTodo();
    const toggleTodo = useToggleTodo();
    const filteredTodos = useFilteredTodos();
    const filter = useFilter();
    const todos = useTodos();

    if (todos.length === 0) {
        return <p>No tasks yet. Add your first task.</p>
    }

    if (filteredTodos.length === 0) {
        if (filter === "completed") return <p>You haven't completed any task yet. Start your first now.</p>
        if (filter === "incompleted") return <p>Congrasts! You have completed all your tasks!</p>
    }

    return (
    <div>
        {filteredTodos.map((t) => (
            <div key={t.id}>
                <h3>{t.task.toUpperCase()}</h3>
                <p>Status: {t.done ? "Complete!" : "Incomplete"}</p>
                <p>Date Created: {new Date(t.created_at).toLocaleDateString()}</p>
                <button onClick={() => removeTodo(t.id)}>Remove task</button>
                <button onClick={() => toggleTodo(t.id)}>{t.done ? "Mark Uncomplete" : "Mark Complete"}</button>
                <hr />
            </div>
        ))}    
    </div>
    );
}