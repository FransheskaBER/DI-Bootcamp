import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [
        { id: 1,  title: "Crimson Pursuit", director: "Ava Stone", genre: "Action", rating: 7 },
        { id: 2,  title: "Echoes of Yesterday", director: "Liam Hart", genre: "Drama", rating: 8 },
        { id: 3,  title: "Galactic Horizon", director: "Nora Vega", genre: "Sci-Fi", rating: 1 },
        { id: 4,  title: "Laughing at Midnight", director: "Ben Collins", genre: "Comedy", rating: 6 },
        { id: 5,  title: "Steel Requiem", director: "Ava Stone", genre: "Action", rating: 2 },
        { id: 6,  title: "Parallel Lights", director: "Nora Vega", genre: "Sci-Fi", rating: 9 },
        { id: 7,  title: "Broken Lullaby", director: "Liam Hart", genre: "Drama", rating: 5 },
        { id: 8,  title: "Punchline Protocol", director: "Ben Collins", genre: "Comedy", rating: 7 },
        { id: 9,  title: "Neon Blitz", director: "Ava Stone", genre: "Action", rating: 1 },
        { id: 10, title: "Shadows Beneath", director: "Liam Hart", genre: "Comedy", rating: 0 },
        { id: 11, title: "Cosmic Drift", director: "Nora Vega", genre: "Sci-Fi", rating: 6 },
        { id: 12, title: "Offbeat Chaos", director: "Ben Collins", genre: "Comedy", rating: 4 },
        { id: 13, title: "Rogue Velocity", director: "Ava Stone", genre: "Action", rating: 7 },
        { id: 14, title: "Fading Embers", director: "Liam Hart", genre: "Drama", rating: 3 },
        { id: 15, title: "Quantum Slip", director: "Nora Vega", genre: "Sci-Fi", rating: 9 },
        { id: 16, title: "Comedy on the Edge", director: "Ben Collins", genre: "Comedy", rating: 9 },
        { id: 17, title: "Iron Tempest", director: "Ava Stone", genre: "Action", rating: 3 },
        { id: 18, title: "Silent Roads", director: "Liam Hart", genre: "Drama", rating: 8 },
        { id: 19, title: "Orbital Minds", director: "Nora Vega", genre: "Sci-Fi", rating: 8 },
        { id: 20, title: "The Last One Laughing", director: "Ben Collins", genre: "Comedy", rating: 7 },
    ],
    genre: "",
    director: "",
    rating: "",
};

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setGenre(state, action) {
            state.genre = action.payload; 
        },
        setDirector(state, action) {
            state.director = action.payload; 
        },
        setRating(state, action) {
            state.rating = action.payload; 
        },
    },
});

export const { setGenre, setDirector, setRating } = moviesSlice.actions;
export default moviesSlice.reducer;