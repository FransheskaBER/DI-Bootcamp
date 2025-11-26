import { useDispatch } from "react-redux";
import { complete } from "./store/todoSlice";
import { useState } from "react";

export default function CompleteTodo({ id, completed }){
    const [taskComplete, setTaskComplete] = useState(completed);
    const dispatch = useDispatch();

    function handleChange(e) {
        setTaskComplete(e.target.value);
        dispatch(complete(id));
    }

    return (
        <input className="checkboxInput" type="checkbox" value={taskComplete} onChange={handleChange}/>
    );
}
