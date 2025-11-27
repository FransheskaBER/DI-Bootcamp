import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createCategory } from "../store/todoSlice.js";

export default function CreateCat() {
    const [categoryName, setCategoryName] = useState("");
    const dispatch = useDispatch();
    const allCategories = useSelector(state => state.categories);

    function handleClick() {
        if (!categoryName.trim()) return;

        const newCat = {
            id: Date.now(),
            name: categoryName, 
            todos: [],
        }

        dispatch(createCategory(newCat));
        setCategoryName("");
    }

    return (
        <>
        <div>
            <input type="text" value={categoryName} onChange={(e) => setCategoryName(e.target.value)}/>
            <button onClick={handleClick}>Create Category</button>
        </div>
        <ul>
            {allCategories.length > 0 && (
                allCategories.map(cat => (
                    <li key={cat.id}>{cat.name}</li>
                ))
            )}
        </ul>
        </>
    );
}
