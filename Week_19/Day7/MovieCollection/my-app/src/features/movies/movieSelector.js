import { createSelector } from "@reduxjs/toolkit";


export const selectAllMovies = state => state.movies;
export const selectUniqueDirectors = createSelector(
    [selectAllMovies],
    movies => [... new Set(movies.map(m => m.director))]
);

const selectGenre = state => state.genre;
const selectDirector = state => state.director;
const selectRating = state => state.rating;

const matchesRating = (value, filter) => {
    switch (filter) {
        case "bad": return value <= 3;
        case "good": return value > 3 && value <= 7;
        case "great": return value > 7;
        default: return true;
    }
};

export const selectFilteredMovies = createSelector(
    [selectAllMovies, selectGenre, selectDirector, selectRating],
    (movies, genre, director, rating) => 
        movies.filter(m => 
            (!genre || m.genre === genre) &&
            (!director || m.director === director) &&
            (!rating || matchesRating(m.rating, rating))
        )
);



