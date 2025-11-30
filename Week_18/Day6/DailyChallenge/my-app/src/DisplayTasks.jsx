import { useSelector } from "react-redux";
import RemoveTask from "./RemoveTask.JSX";
import EditTask from "./EditTask.jsx";

export default function DisplayTasks({ date }) {
    const allTasks = useSelector(state => state.tasks);
    const selectedTasks = date ? allTasks.filter(tasks => tasks.date === date): [];

    const prettyDate = date
        ? new Date(date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric"
            })
        : "";

    return (
        <>
        {selectedTasks.length > 0 && (
            <>
            <h2 className="taskList">Tasks for {prettyDate}</h2>
            {selectedTasks.map(t => (
                <div key={t.id} className="tasksWrapper">
                    <EditTask task={t}/>
                    <RemoveTask  id={t.id}/>
                </div>
            ))}
            </>
        )}
        </>
    );
}