import express from "express";

const app = express();
app.use(express.json());

// Temp DB
const todoList = []; 

// create a new task and add it to the to-do list:
app.post("/api/todos", (req, res) => {
    let { title } = req.body;
    if (!title) return res.status(400).send("Title is required");

    title = title.toLowerCase();

    const alreadyExistTask = todoList.find(task => task.title === title);
    if (alreadyExistTask) return res.status(409).send("Task already exist");

    
    const newTask = {
        id: Date.now(),
        title,
        completed: false,
    };
        
    todoList.push(newTask);
    console.log("To-do list in memory:", todoList);
        
    return res.status(201).json(newTask);
});

// get all tasks from the to-do list:
app.get("/api/todos", (req, res) => {
    return res.status(200).json(todoList);
});

// get a specific task from the to-do list:
app.get("/api/todos/:id", (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).send("Invalid Id");

    const task = todoList.find(task => task.id === id);
    if (!task) return res.status(404).send("Task Not Found");

    return res.status(200).json(task);
});

// update a task in the to-do list:
app.put("/api/todos/:id", (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).send("Invalid Id");

    const { title, completed } = req.body;
    if (title === undefined || completed === undefined) return res.status(400).send("Title and completed status required");

    const index = todoList.findIndex(task => task.id === id);
    if (index === -1 ) return res.status(404).send("Task Not Found");

    const updatedTask = {
        id: todoList[index].id,
        title,
        completed,
    };

    todoList[index] = updatedTask;
    
    console.log(todoList);
    return res.status(200).json(updatedTask);
});

// delete a specific task from the to-do list:
app.delete("/api/todos/:id", (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).send("Invalid Id");

    const index = todoList.findIndex(task => task.id === id);
    if (index === -1 ) return res.status(404).send("Task Not Found");

    const deletedTask = todoList.splice(index, 1);

    console.log(todoList);
    return res.status(200).json(deletedTask);
});


app.listen(5000, () => console.log("Server running on port 5000"));

