import express from "express";
// here you are naming the routes from "./routes/todoRoutes.js" to "todoRoutes" just for more clarity in general
import todoRoutes from "./routes/todoRoutes.js";

const app = express();
app.use(express.json());

// Here mount the routes in todoRoutes.js under /api/todos
app.use('/api/todos', todoRoutes);

// 404 for unknown routes
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

// Here you handle all the global errors handlers responds from the catch > next(err) in todoController.js
app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({ error: err.message || "Server error" });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`));
