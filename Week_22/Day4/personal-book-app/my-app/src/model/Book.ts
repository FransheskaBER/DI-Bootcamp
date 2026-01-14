export interface Book {
    id: string;
    title: string;
    author: string;
    genre: string;
    isRead: boolean;
    dateAdded: string;
}

export class BookItem {
    private book: Book;

    constructor(book: Book) {
        this.book = book;
    }

    getId(): string {
        return this.book.id;
    }

    getTitle(): string {
        return this.book.title;
    }

    getAuthor(): string {
        return this.book.author;
    }

    getGenre(): string {
        return this.book.genre;
    }

    getIsRead(): boolean {
        return this.book.isRead;
    }

    getDateAdded(): string {
        return this.book.dateAdded;
    }

    toggleRead(): void {
        this.book.isRead = !this.book.isRead;
    }

    // serialization means: convert a BookItem class instance (which has method like toggleRead(), etc) INTO a plain Book object (a JS object w/ just data, not methods)
    toJson(): Book {
        return { ...this.book };
    };

}