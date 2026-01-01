type filter = {
    val: string;
    handleChange: () => {}
}

export default function FilterTodo<filter>({ val: string, handleChange }) {
    return (
        <select onSelect={val} onChange={handleChange}>
            <option value="all">All tasks</option>
            <option value="done">Completed tasks</option>
            <option value="undone">Uncompleted tasks</option>
            <option value="overdue">Overdue tasks</option>
        </select>
    );
}