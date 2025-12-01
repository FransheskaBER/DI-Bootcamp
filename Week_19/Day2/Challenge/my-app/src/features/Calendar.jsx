import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import AddTask from "./AddTask.jsx";
import { useDispatch } from "react-redux";
import { setSelectedDate } from "./plannerSlice";

export default function Calendar() {
    const [date, setDate] = useState(new Date());
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSelectedDate(date.toISOString()))
    }, [date])

    return (
        <>
        <DatePicker selected={date} onChange={(date) => setDate(date)} />
        <AddTask selectedDate={date}/>
        </>
    );
}