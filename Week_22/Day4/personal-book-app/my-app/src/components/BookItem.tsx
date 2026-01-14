import { type Book } from "../model/Book";
import { useToggleRead, useRemoveBook } from "../app/hooks";

interface BookItemProps {
    book: Book;
}

const BookItem = ({ book }: BookItemProps) => {
    const toggleRead = useToggleRead();
    const removeBook = useRemoveBook();

    return (
        <div>
            <h3>{book.title} by {book.author}</h3>
            <p>Genre: {book.genre}</p>
            <p>Created at: {new Date(book.dateAdded).toLocaleDateString()}</p>
            <p>Status: {book.isRead ? "Read" : "Unread"}</p>
            <button onClick={() => toggleRead(book.id)}>{book.isRead ? "Mark as Unread" : "Mark as Read"}</button>
            <button onClick={() => removeBook(book.id)}>Remove</button>
        </div>
    );
}

export default BookItem;