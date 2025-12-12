"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
class Library {
    constructor() {
        this.books = [];
    }
    addBook(newBook) {
        this.books.push(newBook);
    }
    getBookDetails(isbn) {
        const book = this.books.find(b => b.isbn === isbn);
        if (!book) {
            throw new Error("Book not found");
        }
        return book;
    }
    getBooksTitle() {
        return this.books.map(book => book.title);
    }
}
class DigitalLibrary extends Library {
    constructor(website) {
        super();
        this.website = website;
    }
    listBooks() {
        return this.getBooksTitle();
    }
}
const book1 = {
    title: "The Last Algorithm",
    author: "Eleanor Finch",
    isbn: "978-0-7356-9012-3",
    publishedYear: 2019,
    genre: "Technology"
};
const book2 = {
    title: "Midnight Over Reykjavik",
    author: "Jonas Karlsson",
    isbn: "978-1-4028-9467-8",
    publishedYear: 2015,
    genre: "Crime"
};
const book3 = {
    title: "Maps of a Broken Future",
    author: "Sofia Alvarez",
    isbn: "978-0-316-48912-5",
    publishedYear: 2021,
};
const myDigitalLibrary = new DigitalLibrary("www.bestbooks.com");
myDigitalLibrary.addBook(book1);
myDigitalLibrary.addBook(book2);
myDigitalLibrary.addBook(book3);
console.log(myDigitalLibrary.getBookDetails("978-0-316-48912-5"));
console.log(myDigitalLibrary.listBooks());
//# sourceMappingURL=buildingLibrarySystem.js.map