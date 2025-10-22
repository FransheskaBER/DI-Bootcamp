import express from "express";
import knex from "knex";

const app = express();
app.use(express.json());

const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'admin',
        password: 'Queen2025',
        database: 'blogdb',
    },
});

// db.raw('SELECT 1')
//   .then(() => console.log('✅ Database connected'))
//   .catch(err => {
//     console.error('❌ Database connection failed:', err.message);
//     process.exit(1);
//   });

// Implement the “Read all” route by defining a route at GET /api/books. Send a JSON response with the books array.
app.get('/api/books', async(req, res) => {
    try {
        const books = await db("books").select('*');
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Implement the “Read” route by defining a route at GET /api/books/:bookId.
// Extract the bookId parameter from the URL and use it to find the corresponding book in the books array.
// If the book is found, send a JSON response with the book details and a status code of 200 (OK).
// If the book is not found, send a 404 status with a “Book not found” message.
app.get("/api/books/:bookId", async(req, res) => {
    try {
        const id = Number(req.params.bookId);
        if (isNaN(id)) return res.status(400).json({ error: "INVALID ID" });

        const book = await db('books').where({ id }).first();
        if (!book) return res.status(404).json({ error: "BOOK NOT FOUND" });

        return res.status(200).json(book);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Implement the “Create” route at POST /api/books.
app.post('/api/books', async(req, res) => {
    try {
        const { title, author, published_year } = req.body;
        if (typeof title !== "string" || typeof author !== "string" || typeof published_year !== "number" || !title || !author || !published_year){
            return res.status(400).json({ error: "TITLE/AUTHOR AND YEAR REQUIRED" });
        }

        const [newBook] = await db('books').insert({ title: title.trim(), author: author.trim(), published_year, created_at: new Date(), updated_at: new Date()}).returning('*');
        res.status(201).json(newBook);
    } catch (err){
        res.status(500).json({ error: err.message });
    }
});

const PORT = 2200;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));