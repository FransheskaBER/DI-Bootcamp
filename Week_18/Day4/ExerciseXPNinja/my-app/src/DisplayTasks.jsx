import { useContext } from "react";
import { TasksContext } from "./TasksManager.jsx";
import RemoveTask from "./RemoveTask.jsx";
import CompleteTask from "./CompleteTask.jsx";

export default function DisplayTasks(){
    const { tasks } = useContext(TasksContext);

    return (
        <>
        <h1>Tasks</h1>
        <ul>
            {tasks.map((t) => (
                <label key={t.id} style={{ display: "block", margin: "1rem" }}>
                    <CompleteTask id={t.id} completed={t.completed}/>
                    <span style={{ textDecoration: t.completed ? "line-through" : "none", margin: "0.5rem" }}>{t.title}</span>
                    <RemoveTask id={t.id}/>
                </label>
            ))}
        </ul>
        </>
    );
}