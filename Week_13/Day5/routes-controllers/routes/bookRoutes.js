// Defines URL file paths in which the functions or what to do happends and methods:
import express from "express";
import { getAllBooks, addBook, getBookById, deleteBook } from "../controllers/bookController.js";

const router = express.Router();

// when you visit /api/books > it will run getAllBooks
router.get("/", getAllBooks);

// when you send a POST to /api/books > it will run addBook:
router.post("/", addBook);

router.get("/:bookId", getBookById)

router.delete("/:bookId", deleteBook);

export default router;
