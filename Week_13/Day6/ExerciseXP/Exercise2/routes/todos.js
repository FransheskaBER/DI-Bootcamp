import express from "express";

const route = express.Router();
export default route;

// Sample in-memory database for storing to-do items
const todos = [
    { id: 1, title: "Study Javascript", completed: false },
    { id: 2, title: "Study C++", completed: false },
    { id: 3, title: "Study Java", completed: false },
    { id: 4, title: "Study Python", completed: false },
];

// Get all to-do items
route.get("/", (req, res) => {
    res.status(200).json(todos);
});

// Add a new to-do item
route.post("/", (req, res) => {
    const { title, completed } = req.body;
    if (!title || !completed) return res.status(400).json({ error: "Title and completed required "});

    const newTask = {
        id: todos.length + 1,
        title, 
        completed,
    };
    todos.push(newTask);
    res.status(201).json(newTask);
});

// Update a to-do item by ID
route.put("/:taskId", (req, res) => {
    const id = Number(req.params.taskId);
    if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

    const { title, completed } = req.body;
    if (title === undefined || completed === undefined) return res.status(400).json({ error: "Title and completed required "});
    
    const index = todos.findIndex(task => task.id === id);
    if (index === -1) return res.status(404).json({ error: "Task Not Found" });
    
    const updatedTask = { id, title, completed };
    todos[index] = updatedTask
    res.status(200).json(updatedTask);
});

// Delete a to-do item by ID
route.delete("/:taskId", (req, res) => {
    const id = Number(req.params.taskId);
    if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

    const index = todos.findIndex(task => task.id === id);
    if (index === -1) return res.status(404).json({ error: "Task Not Found" });

    const deletedTask = todos.splice(index, 1)[0];
    res.status(200).json(deletedTask);
});
