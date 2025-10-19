import express from "express";
import bookRoute from "./routes/books.js";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use("/api/books", bookRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
