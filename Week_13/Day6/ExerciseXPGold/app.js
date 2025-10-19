import express from "express";
import blogRoute from "./routes/blogs.js";

const app = express();
const port = 5000;

app.use(express.json());
app.use("/api/posts", blogRoute);

app.listen(port, () => console.log(`Server running on port ${port}`));