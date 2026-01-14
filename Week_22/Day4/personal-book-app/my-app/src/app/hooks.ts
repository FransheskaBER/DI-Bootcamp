import type { RootState, AppDispatch } from "./store";
import { useSelector, useDispatch, type TypedUseSelectorHook } from "react-redux";
import { addBook, removeBook, toggleRead, setFilter, addCategory } from "./booksSlice";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


export function useAddBook() {
    const dispatch = useAppDispatch();
    return (book: { title: string, author: string, genre?: string }) => {
        dispatch(addBook(book));
    };
}

export function useRemoveBook() {
    const dispatch = useAppDispatch();
    return (id: string) => {
        dispatch(removeBook(id))
    }
}

export function useToggleRead() {
    const dispatch = useAppDispatch();
    return (id: string) => {
        dispatch(toggleRead(id))
    }
}

export function useBooks() {
    return useAppSelector((state) => state.books.books);
}

export function useSetFilter() {
    const dispatch = useAppDispatch();
    return (filter: "all" | "read" | "unread") => {
        dispatch(setFilter(filter))
    }
}

export function useFilter() {
    return useAppSelector((state) => state.books.filter);
}

export function useFilteredBooks() {
    const books = useBooks();
    const filter = useFilter();

    if (filter === "all") return books;
    if (filter === "read") return books.filter((book) => book.isRead);
    if (filter === "unread") return books.filter((book) => !book.isRead);

    return books;
}

export function useAddCategory() {
    const dispatch = useAppDispatch();
    return (newCat: string) => {
        dispatch(addCategory(newCat));
    }
}

export function useCategories() {
    return useAppSelector((state) => state.books.categories)
}



