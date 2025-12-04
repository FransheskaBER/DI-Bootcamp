import React from "react";

function FilterTodo({ filter, handleChange, handleFilter }) {
    return (
        <div>
            <label>
                Filter by Status: 
                <select value={filter} onChange={handleChange}>
                    <option value="">All</option>
                    <option value="true">Completed</option>
                    <option value="false">Active</option>
                </select>
                <button onClick={handleFilter}>Apply Filter</button>
            </label>
        </div>
    );
}

export default React.memo(FilterTodo);