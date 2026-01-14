import { useFilteredBooks, useFilter } from "../app/hooks";
import BookItem from "./BookItem";

const BookList = () => {
    const filteredBooks = useFilteredBooks();
    const filter = useFilter();

    if (filteredBooks.length === 0) {
        if (filter === "read") return <p>No books have been finished yet!</p>;
        if (filter === "unread") return <p>All books have been read!</p>;
        return <p>No books yet! Add your first book.</p>;
    }

    return (
        <div>
            {filteredBooks.map((book) => (
                <BookItem key={book.id} book={book}/>
            ))}
        </div>
    );
}

export default BookList;