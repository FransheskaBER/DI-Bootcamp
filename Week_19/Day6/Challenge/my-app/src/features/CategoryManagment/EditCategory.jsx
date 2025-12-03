import { editCat } from "../trackerSlice.js";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function EditCategory({ catId, currentName, currentColor, closeEditor }) {
    const [updates, setUpdates] = useState({
        name: currentName,
        color: currentColor,
    });
    const dispatch = useDispatch();

    function handleChange(e) {
        const { name, value } = e.target;
        setUpdates(prev => ({ ...prev, [name]: value }));
    };

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(editCat({ id: catId, updates: { ...updates } }));
        setUpdates({
            name: currentName,
            color: currentColor,
        });
        if (closeEditor) closeEditor();
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", margin: "30px", alignItems: "center", gap: "10px" }}>
            <input type="text" name="name" value={updates.name} onChange={handleChange} />
            <input type="color" name="color" value={updates.color} onChange={handleChange} />
            <button type="submit">Save Changes</button>
        </form>
    );
}
