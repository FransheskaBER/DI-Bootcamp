import { useContext } from "react";
import { TasksContext } from "./TaskMgmnContext.jsx";
import UpdateTask from "./UpdateTask.jsx";

export default function DisplayAllTasks() {
    const { tasks, deleteTasks } = useContext(TasksContext);

    const visible = tasks.filter == null
      ? tasks.items
      : tasks.items.filter(t => t.completed === tasks.filter);
    
    return (
    <>
    {visible.length > 0 ? (
      <>
        {visible.map(task => (
          <div key={task.id} className="updateTaskContainer">
            <UpdateTask id={task.id} title={task.title} completed={task.completed} />
          </div>
        ))}
        <div className="row">
          <button onClick={deleteTasks}>Delete All Tasks</button>
        </div>
      </>) : (
      "Add your first task"
    )}
    </>
    );
}