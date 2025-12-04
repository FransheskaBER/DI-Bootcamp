import FilterMovie from "./FilterMovie.jsx";
import { useSelector, useDispatch } from "react-redux";
import { setGenre, setDirector, setRating } from "../features/movies/moviesSlice.js";
import { selectAllMovies, selectFilteredMovies } from "../features/movies/movieSelector.js";
import { useState } from "react";

export default function MovieList() {
    const [filterForm, setFilterForm] = useState({ genre: "", director: "", rating: "" });
    const dispatch = useDispatch();
    const allMovies = useSelector(selectAllMovies);
    const filteredMovies = useSelector(selectFilteredMovies);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilterForm(prev => ({ ...prev, [name]: value }));
    };

    const handleAppliedFilter = (e) => {
        e?.preventDefault();
        dispatch(setGenre(filterForm.genre));
        dispatch(setDirector(filterForm.director));
        dispatch(setRating(filterForm.rating));
    };

    return (
        <>
        <FilterMovie form={filterForm} handleChange={handleChange} handleAppliedFilter={handleAppliedFilter} />
        <nav style={{ display: "flex", gap: "10px", justifyContent: "center"}}>
            <h5>Title</h5>
            <h5>Director</h5>
            <h5>Genre</h5>
            <h5>Rating</h5>
        </nav>
        {filteredMovies?.map(m => (
            <p key={m.id}>{m.title} - {m.director} - {m.genre} - {m.rating}</p>
        ))}
        </>
    )
}
