import Calendar from "./Calendar";
import { useSelector } from "react-redux";
import EditTask from "./EditTask.jsx";

export default function TasksList() {
    const { selectedDate, tasks } = useSelector(state => state.planner);

    const filteredTasks = selectedDate
        ? tasks.filter(t => t.date === selectedDate)
        : [];

    const convertDate = new Date(selectedDate);
    const prettydate = convertDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <>
        <h1>Add your first task</h1>
        <Calendar />
        <h2>Your tasks for {prettydate}</h2>
        {filteredTasks.length > 0 ? (
            <>
            {filteredTasks.map(t => (
                <div key={t.id}>
                    <EditTask taskId={t.id} title={t.task} completed={t.done}/>
                </div>
            ))}
            </>
        ) : (
            <h4>Nothing scheduled for this date.</h4>
        )}

        </>
    );
}