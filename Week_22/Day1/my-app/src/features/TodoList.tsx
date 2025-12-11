import { useState } from "react";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export default function TodoList() {
    const [list, setList] = useState<Todo[]>([]);
    const [input, setInput] = useState<string>("");

    function handleAdd(){
        if (!input.trim()) return;

        const newTodo: Todo = {
            id: Date.now(),
            text: input,
            completed: false,
        }
        
        setList((prev) => [...prev, newTodo]);
        setInput("");
    }
    
    return (
        <div>
            <div>
                <h1>Create a new todo-task</h1>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={handleAdd}>Add Task</button>
            </div>
            <div>
                {list.length > 0 && (
                    <ul>{list.map(todo => (
                        <li key={todo.id}>Todo Task: {todo.text} - Completed: {todo.completed ? "Completed" : "Incomplete"}</li>
                    ))}</ul>
                )}
            </div>
        </div>
    );
}