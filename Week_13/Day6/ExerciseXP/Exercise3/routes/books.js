import express from "express";

// routes/books.js
const bookRoute = express.Router();

// Sample in-memory database for storing books
const books = [
    { id: 1, title: "Harry Potter", author: "J.K. Rowling" },
    { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien" },
];

// Get all books
bookRoute.get("/", (req, res) => {
    res.json(books);
});

// Add a new book
bookRoute.post("/", (req, res) => {
    const { title, author } = req.body;

    if (!title || !author) return res.status(400).json({ error: "Title and author required" });

    const newBook = {
        id: books.length + 1,
        title,
        author,
    };

    books.push(newBook);
    res.status(201).json(newBook);
});

// Update a book by ID
bookRoute.put("/:bookId", (req, res) => {
    const id = Number(req.params.bookId);
    if (isNaN(id)) return res.status(400).json({ error: "invalid id" });
    
    const { title, author } = req.body;
    if (!title || !author) return res.status(400).json({ error: "Title and author required" });

    const index = books.findIndex(book => book.id === id);
    if (index === -1) return res.status(404).json({ error: "Book not found" });

    const updatedBook = {
        id,
        title,
        author,
    };
    books[index] = updatedBook;
    res.status(200).json(updatedBook);
});

// Delete a book by ID
bookRoute.delete("/:bookId", (req, res) => {
    const id = Number(req.params.bookId);
    if (isNaN(id)) return res.status(400).json({ error: "invalid id" });

    const index = books.findIndex(book => book.id === id);
    if (index === -1) return res.status(404).json({ error: "Book not found" });

    const deletedBook = books.splice(index, 1)[0];
    res.status(200).json(deletedBook);
});

export default bookRoute;