import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { type Book } from "../model/Book";

interface BookState {
    books: Book[];
    filter: "all" | "read" | "unread";
    categories: string[];
}

export type myBook = {
    title: string;
    author: string;
    genre?: string;
}

const initialState: BookState = {
    books: [],
    filter: "all",
    categories: ["general"],
}

const BooksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        addBook(state, action: PayloadAction<myBook>) {
            const { title, author, genre } = action.payload;
            const bookgenre = genre?.trim().toLowerCase() || "general";
            const exists = state.categories.includes(bookgenre);
            if (!exists) {
                state.categories.push(bookgenre);
            }
            const newBook: Book = {
                id: uuid(),
                title,
                author,
                genre: bookgenre,
                isRead: false,
                dateAdded: new Date().toISOString(),
            };
            state.books.push(newBook);           
        },
        removeBook(state, action: PayloadAction<string>) {
            state.books = state.books.filter((b) => b.id !== action.payload)
        },
        toggleRead(state, action: PayloadAction<string>) {
            const book = state.books.find((b) => b.id === action.payload);
            if (!book) return;
            book.isRead = !book.isRead;
        },
        setFilter(state, action: PayloadAction<"all" | "read" | "unread">) {
            state.filter = action.payload;
        },
        addCategory(state, action: PayloadAction<string>) {
            const normalizedCat = action.payload.trim().toLowerCase();
            if (!normalizedCat) return;
            const exist = state.categories.includes(normalizedCat);
            if (exist) return;
            state.categories.push(normalizedCat);
        },
    }
});

export const { addBook, removeBook, toggleRead, setFilter, addCategory } = BooksSlice.actions;
export default BooksSlice.reducer;

