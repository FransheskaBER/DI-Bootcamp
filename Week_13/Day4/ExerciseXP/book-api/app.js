import express from "express";

const app = express();

// middleware that auto parse incoming JSON data from the request body (into JS objects) 
// and make it available under re.body
app.use(express.json()); 

const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedYear: 1960
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    publishedYear: 1949
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publishedYear: 1813
  }
];

app.listen(5000, () => console.log("The server is running on file app.js and listening on port 5000"));

app.get("/api/books", (req, res) => {
    res.json(books);
});

app.get("/api/books/:bookID", (req, res) => {
    const id = Number(req.params.bookID);
    if (isNaN(id)) return res.status(400).send("Invalid ID");
    
    const book = books.find(book => book.id === id);
    if (!book) return res.status(404).send("Book Not Found");

    return res.status(200).json(book);
});

app.post("/api/books", (req, res) => {
    const { title, author, publishedYear } = req.body;
    if (!title || !author || !publishedYear) return res.status(400).send("Title, Author, aand Published Year are required");

    const newBook = {
        id: books.length + 1,
        title,
        author,
        publishedYear
    };

    books.push(newBook);
    return res.status(201).json(newBook);
});





