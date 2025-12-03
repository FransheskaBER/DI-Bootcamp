import { selectAllTasks, selectAllCats, selectCompletedTasks, selectTasksByCategory, deleteTask } from "../trackerSlice.js";
import EditTask from "./EditTask.jsx";
import DeleteTask from "./DeleteTask.jsx";
import { useSelector, useDispatch } from "react-redux";
import { useCallback, useState } from "react";

export default function TaskList() {
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [catFilter, setCatFilter] = useState("");
    const [doneFilter, setDoneFilter] = useState("");

    const dispatch = useDispatch();
    const tasks = useSelector(selectAllTasks);
    const categories = useSelector(selectAllCats);
    const doneTasks = useSelector(state => selectCompletedTasks(state, doneFilter));
    const tasksByCat = useSelector(state => selectTasksByCategory(state, catFilter))

    let displayedTasks = tasks;

    if (catFilter === "" && doneFilter === "") {
        displayedTasks = tasks;
    } else if (catFilter && doneFilter === "") {
        displayedTasks = tasksByCat;
    } else if (!catFilter && doneFilter !== "") {
        displayedTasks = doneTasks;
    } else if (catFilter && doneFilter !== "") {
        displayedTasks = doneTasks.filter(t => t.categoryId === catFilter);
    }

    const handleDeleteTask = useCallback(
        (id) => {
            dispatch(deleteTask(id));
        }, [dispatch]
    )

    return (
        <>
        <div>
            <h1>Your Tasks</h1>

            <div>
                <label style={{ display: "inline-flex", gap: "10px" }}>Filter Tasks:  
                <select value={doneFilter} onChange={(e) => {
                    const value = e.target.value;
                    if (value === "") {
                        setDoneFilter("");
                    } else {
                        setDoneFilter(value === "true");
                    }
                }}>
                    <option value="">All Tasks</option>
                    <option value="true">Done</option>
                    <option value="false">Undone</option>
                </select>
                <select value={catFilter} onChange={(e) => setCatFilter(e.target.value)} >
                    <option value="">All Tasks</option>
                    {categories.map(c => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                </select> 
                </label>
            </div>
            
            <div>
                {displayedTasks.length > 0 ? (
                    displayedTasks.map(t => (
                        <div key={t.id} style={{ display: "flex", margin: "30px", alignItems: "center", gap: "10px" }}>
                            {editingTaskId === t.id ? (
                                <EditTask
                                    taskId={t.id}
                                    currentTitle={t.title}
                                    currentCat={t.categoryId}
                                    currentDate={t.date}
                                    currentProgress={t.progress}
                                    closeEditor={() => setEditingTaskId(null)}
                                />
                            ) : (
                                <>
                                    <span style={{ textDecoration: t.completed ? "line-through" : undefined }}>{t.title}</span>
                                    <span> - Progress: {t.progress}%</span>
                                    <DeleteTask handleClick={() => handleDeleteTask(t.id)} />
                                    <button onClick={() => setEditingTaskId(t.id)}>Edit Task</button>
                                </>
                            )}
                        </div>
                    ))
                ) : (
                    <p>No tasks</p>
                )}
            </div>
        </div>
        </>
    );
}
