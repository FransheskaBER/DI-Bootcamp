import { editTask, selectAllCats, updateProgress } from "../trackerSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useState } from "react";
import UpdateProgress from "./UpdateProgress.jsx";

export default function EditTask({ taskId, currentTitle, currentCat, currentDate, currentProgress, closeEditor }) {
    const [updates, setUpdates] = useState({
        title: currentTitle,
        categoryId: currentCat,
        date: currentDate,
        progress: currentProgress,
    });
    const allCats = useSelector(selectAllCats);
    const dispatch = useDispatch();

    function handleChange(e) {
        const { name, value } = e.target;
        setUpdates(prev => ({ ...prev, [name]: value }));
    };

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(editTask({ id: taskId, updates: {...updates} }));
        setUpdates({
            title: currentTitle,
            categoryId: currentCat,
            date: currentDate,
            progress: currentProgress,
        });
        closeEditor();
    };

    const handleProgressChange = useCallback(
        (newVal) => {
            setUpdates(prev => ({ ...prev, progress: newVal }));
            dispatch(updateProgress({ id: taskId, newProgress: Number(newVal) }));
        }, 
        [dispatch, taskId]
    );

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", margin: "30px", alignItems: "center", gap: "10px" }}>
            <input type="text" name="title" value={updates.title} onChange={handleChange} />
            <label>Choose a category: <br /> 
                    <select name="categoryId" value={updates.categoryId} onChange={handleChange} >
                    {allCats.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                    </select>
            </label>
            <label>Date: <input name="date" value={updates.date} onChange={handleChange} type="date" /></label>
            <UpdateProgress progress={updates.progress} handleProgress={(e) => handleProgressChange(e.target.value)}/>
            <button type="submit">Save Changes</button>
        </form>
    );
}
