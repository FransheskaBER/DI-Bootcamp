import CategoryRow from "./CategoryRow.jsx";
import { selectAllCats, deleteCat, selectCategoryById,  } from "../trackerSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { useCallback, useState } from "react";

export default function CategorySelector() {
    const [editingCatId, setEditingCatId] = useState(null);
    const [categoryId, setCategoryId] = useState("");
    const [colorFilter, setColorFilter] = useState("");

    const dispatch = useDispatch();
    const categories = useSelector(selectAllCats);
    const selectedCategory = useSelector(state => selectCategoryById(state, categoryId));

    const colors = categories.map(cat => cat.color);
    const uniqueColors = [ ...new Set(colors)];

    const displayedCats = (() => {
    if (!categoryId && !colorFilter) return categories;
    if (categoryId && !colorFilter) return [selectedCategory].filter(Boolean);
    if (!categoryId && colorFilter) return categories.filter(cat => cat.color === colorFilter);
    // both filters
    return categories.filter(cat => cat.id === categoryId && cat.color === colorFilter);
    })();

    const handleDeleteCat = useCallback(id => dispatch(deleteCat({ catId: id })), [dispatch]);
    const handleEditToggle = useCallback(id => setEditingCatId(id ?? null), []);

    return (
        <>
        <div>
            <h1>Your Categories</h1>

            <div>
                <label style={{ display: "inline-flex", gap: "10px" }}>Filter Categories:  
                <select value={colorFilter} onChange={(e) => setColorFilter(e.target.value)}>
                    <option value="">All Colors</option>
                    {uniqueColors.map(c => (
                    <option key={c} value={c}>{c}</option>
                    ))}
                </select>
                <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} >
                    <option value="">All Categories</option>
                    {categories.map(c => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                </select> 
                </label>
            </div>
            
            <div>
                {displayedCats.length > 0 ? (
                    <>
                    {displayedCats.map(cat => (
                    <CategoryRow
                            key={cat.id}
                            cat={cat}
                            onDelete={handleDeleteCat}
                            onEdit={handleEditToggle}
                            editingCatId={editingCatId}
                        />
                    ))}
                    </>
                ) : (
                    <p>No Categories</p>
                )}
            </div>
        </div>
        </>
    );
}
