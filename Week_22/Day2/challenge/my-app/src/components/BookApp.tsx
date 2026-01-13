import { useState} from "react";
import { GenericList, type Book } from "./GenericList";

const myBooks: Book[] = [
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "Brave New World", author: "Aldous Huxley" }
]

export default function BookApp() {
    const [books, setBooks] = useState<Book[]>(myBooks);
    const [form, setForm] = useState<Book>({ id: books.length, title: "", author: "" })
    const [submit, setSubmit] = useState<boolean>(false);

    function handleAdd(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const newBook: Book = {
            id: books.length + 1,
            title: form.title,
            author: form.author,
        };
        const updatedBooks = [...books, newBook];
        setBooks(updatedBooks);
        setForm({ id: books.length, title: "", author: "" });
        setSubmit(true);
        console.log(`New book:`, newBook);
        console.log(`All books:`, updatedBooks);
        console.log(`myBooks:`, myBooks);
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    return (
        <>
        <h2>My books</h2>
        <GenericList 
            items={books}
            getKey={(b) => b.id}
            renderItem={(b) => (
                <div>
                    {b.title} by {b.author}
                </div>
            )}
        />
        <hr />
        <div>
            <h2>Add a new book</h2>
            <form onSubmit={handleAdd}>
                <input type="text" name="title" value={form.title} onChange={handleChange}/>
                <input type="text" name="author" value={form.author} onChange={handleChange}/>
                <button type="submit">Add</button>
            </form>
            {submit && <p>A new book was successfully added.</p>}
        </div>
        </>
    );
}