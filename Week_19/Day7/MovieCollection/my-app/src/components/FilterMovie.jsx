import { selectUniqueDirectors } from "../features/movies/movieSelector.js";
import { useSelector } from "react-redux"
import React from "react";

function FilterMovie({ form, handleChange, handleAppliedFilter }) {
    const directors = useSelector(selectUniqueDirectors);

    return (
        <>
        <form onSubmit={handleAppliedFilter}>
            <label>Filter:
                <select name="genre" value={form.genre} onChange={handleChange}>
                    <option value="">All Genres</option>
                    <option value="Action">Action</option>
                    <option value="Drama">Drama</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                    <option value="Comedy">Comedy</option>
                </select>

                <select name="director" value={form.director} onChange={handleChange}>
                    <option value="">All Directors</option>
                    {directors?.map(d => (
                        <option key={d} value={d}>{d}</option>
                    ))}
                </select>

                <select name="rating" value={form.rating} onChange={handleChange}>
                    <option value="">All Ratings</option>
                    <option value="good">Good</option>
                    <option value="bad">Bad</option>
                    <option value="great">Great</option>
                </select>
            </label>
            <button type="submit">Apply Filter</button>
        </form>
        </>
    );
}

export default React.memo(FilterMovie);