import { selectFantasyBooks, selectHorrorBooks, selectScienceFictionBooks } from "./bookInventorySlice";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function BookList() {
    console.log("BookList render");
    const [genre, setGenre] = useState("");

    const fantasyBooks = useSelector(selectFantasyBooks);
    const horrorBooks = useSelector(selectHorrorBooks);
    const scienceFictionBooks = useSelector(selectScienceFictionBooks);

    let displayedBooks = [];
    if (genre === "horror") displayedBooks = horrorBooks;
    if (genre === "fantasy") displayedBooks = fantasyBooks;
    if (genre === "scienceFiction") displayedBooks = scienceFictionBooks;

    return (
        <>
        <h1>See Available Books</h1>
        <select name="genre" value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value="">Select a genre</option>
            <option value="horror">Horror</option>
            <option value="fantasy">Fantasy</option>
            <option value="scienceFiction">Science Fiction</option>
        </select>

        {genre && (
            <ul>
                {displayedBooks.map(b => (
                    <li key={b.id}>{b.title} - {b.author}</li>
                ))}
            </ul>
        )}
        </>
    );
}