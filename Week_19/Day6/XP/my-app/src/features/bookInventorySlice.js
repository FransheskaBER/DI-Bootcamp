import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [
        { id: 1, title: "Whispers in the Cellar", author: "Evan Marlowe", genre: "Horror" },
        { id: 2, title: "The Hollow Choir", author: "Selene Gray", genre: "Horror" },
        { id: 3, title: "Midnight Under the Floorboards", author: "Harper Vane", genre: "Horror" },
        { id: 4, title: "The Ember Crown", author: "Liora Valen", genre: "Fantasy" },
        { id: 5, title: "Dragons of the Winter Vale", author: "Ronan Wildmoor", genre: "Fantasy" },
        { id: 6, title: "The Mapmaker’s Oath", author: "Asha Thorn", genre: "Fantasy" },
        { id: 7, title: "Orbitfall", author: "Cyrus Hall", genre: "Science Fiction" },
        { id: 8, title: "Neon Fracture", author: "Talya Reddick", genre: "Science Fiction" },
        { id: 9, title: "Echoes of Europa", author: "Marcus Ishikawa", genre: "Science Fiction" },
        { id: 10, title: "The Last Circuit", author: "Dana Stroud", genre: "Science Fiction" }
    ],
};

const bookInventorySlice = createSlice({
    name: "bookInventory",
    initialState,
    reducers: {
        addBook(state, action) {
            state.books.push(action.payload);
        },
    },
});

// Create Selectors:
const selectBooks = state => state.bookInventory.books;

export const selectHorrorBooks = createSelector(
    [selectBooks],
    books => books.filter(book => book.genre === "Horror")
);

export const selectFantasyBooks = createSelector(
    [selectBooks],
    books => books.filter(book => book.genre === "Fantasy")
)

export const selectScienceFictionBooks = createSelector(
    [selectBooks],
    books => books.filter(book => book.genre === "Science Fiction")
)

export const { addBook } = bookInventorySlice.actions;
export default bookInventorySlice.reducer;