import DatePickerComponent from "./DatePickerComponent";
import { useState } from 'react'
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";


export default function Addtodo() {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    function handleAddTask() {
        if (!startDate || !input.trim()) return;

        const newTask = {
            id: Date.now(),
            title: input,
            completed: false,
            dueDate: startDate.getTime(),
        }
        dispatch(addTodo(newTask))
        setInput("");
    }

    return (
        <>
        <label>Add a new task: <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/></label>
        <label>Due date: <DatePickerComponent value={startDate} onChange={(date) => setStartDate(date)} /></label>
        <button onClick={handleAddTask}>Add Task</button>
        </>
    );
}