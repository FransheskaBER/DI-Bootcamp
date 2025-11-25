import { TasksContext } from "./TaskMgmnContext.jsx";
import { useContext, useState } from "react";

export default function FilterTasks() {
    const { filterTasks } = useContext(TasksContext);
    const [filtered, setFiltered] = useState("all");

    function handleChange(e) {
        const val = e.target.value;
        setFiltered(val);
        const payload = val === "all" ? null : val === "true";
        filterTasks(payload);
    }

    return (
        <>
            <select value={filtered} onChange={handleChange}>
                <option value="all">All Tasks</option>
                <option value="true">Completed tasks</option>
                <option value="false">Upcompleted tasks</option>
            </select>
        </>
    );
}