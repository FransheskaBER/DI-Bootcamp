// Contains logic for each action:
let books = [
    { 
        id: 1, 
        title: "Harry Potter", 
        author: "J.K. Rowling"
    },
    {
        id: 2,
        title: "The Hobbit",
        author: "J.R.R. Tolkien"
    }
];

export function getAllBooks(req, res) {
    res.json(books);
};

export function addBook(req, res) {
    const { title, author } = req.body;
    if(!title || !author) return res.status(400).json({ error: "Tile and author required" });

    const newBook = {
        id: books.length + 1,
        title,
        author
    };
    books.push(newBook);
    
    res.status(201).json(newBook);
}

export function getBookById(req, res) {
  const id = Number(req.params.bookId);
  const book = books.find(b => b.id === id);
  if (!book) return res.status(404).json({ error: "Book not found" });
  res.json(book);
}

export function deleteBook(req, res) {
    const id = Number(req.params.bookId);
    const index = books.findIndex(book => book.id === id);

    if (index === -1) return res.status(404).json({ error: "Book Not Found" });

    const deletedBook = books.splice(index, 1)[0];
    res.status(200).json(deleteBook);
}