import { useDispatch } from "react-redux";
import { addCat } from "../trackerSlice.js";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddCategory() {
    const [form, setForm] = useState({ name: "", color: "#000000" })
    const dispatch = useDispatch();

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(addCat({ ...form, id: uuidv4() }));
        setForm({ name: "", color: "#000000" });
    }

    return (
        <>
        <div>
            <h3>Add a new category:</h3>
            <form onSubmit={handleSubmit} style={{ display: "flex", gap: "25px", alignItems: "center", flexDirection: "column" }}>
                <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Category name" />
                <label>Choose a color: <input name="color" value={form.color} onChange={handleChange} type="color" /></label>
                <button type="submit">Add Category</button>
            </form>
        </div>
        </>
    );

}