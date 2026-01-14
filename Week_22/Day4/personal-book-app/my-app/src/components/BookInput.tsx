import { useState } from "react";
import { useAddBook } from "../app/hooks";
import { type myBook } from "../app/booksSlice";

const BookInput = () => {
    const [form, setForm] = useState<myBook>({ title: "", author: "", genre: "" });
    const [submitted, setSubmitted] = useState(false);

    const addBook = useAddBook();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    } 

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addBook({
            title: form.title?.trim(),
            author: form.author?.trim(),
            genre: form.genre?.trim() || undefined,
        });
        setSubmitted(true);
        setForm({ title: "", author: "", genre: "" });
        setTimeout(() => setSubmitted(false), 3000);
    }

    return (
        <div>
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                <input name="title" value={form.title} onChange={handleChange} required type="text" placeholder="Enter title" />
                <input name="author" value={form.author} onChange={handleChange} required type="text" placeholder="Enter author" />
                <input name="genre" value={form.genre} onChange={handleChange} type="text" placeholder="Enter Genre" />
                <button type="submit">Add Book</button>
            </form>
            {submitted ? <p>Book was added.</p> : null}
        </div>
    );
}

export default BookInput;