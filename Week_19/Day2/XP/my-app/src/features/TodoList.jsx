import { useSelector } from "react-redux";
import TodoItem from "./TodoItem.jsx";

export default function TodoList() {
    const todos = useSelector(state => state.todos);

    // function handleclick() {
    //     console.log(todos);
        
    // }

    return (
        <>
            {todos.map(t => (
                <div key={t.id}>
                    <TodoItem task={t}/>
                </div>
            ))}
            {/* <button onClick={handleclick}>see todos</button> */}
        </>
    );
}
