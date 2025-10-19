import express from "express";
import route from "./routes/todos.js";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use("/todos", route);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
