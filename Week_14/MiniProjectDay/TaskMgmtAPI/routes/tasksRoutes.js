import express from "express";
import fs from "fs";

const tasksRouter = express.Router();
const filePath = "./data/tasks.json";

tasksRouter.get("/", (req, res, next) => {
    try {
        const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        return res.status(200).json(data.tasks);
    } catch(e){
        next(e);
    }
});

tasksRouter.get("/:id", (req, res, next) => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

        const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        const task = data.tasks.find(task => task.id === id);
        if (!task) return res.status(404).json({ error: "Task not found" });
        
        return res.status(200).json(task);
    } catch(e){
        next(e);
    }
});

tasksRouter.post("/", (req, res, next) => {
    try{
        const { title, description, completed, priority, due_date } = req.body;
        if (!title || !description || completed === undefined || !priority || !due_date) return res.status(400).json({ error: "Missing fields" });

        const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

        const newTask = {
            id: data.tasks.length + 1,
            title, 
            description, 
            completed, 
            priority,
            due_date
        };
        data.tasks.push(newTask);
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
        return res.status(201).json(newTask);
    }catch(e){
        next(e);
    }
});

tasksRouter.put("/:id", (req, res, next) => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

        const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

        const { title, description, completed, priority, due_date } = req.body;
        if (!title || !description || completed === undefined || !priority || !due_date) return res.status(400).json({ error: "Missing fields" });
        
        const task = data.tasks.find(task => task.id === id);
        if (!task) return res.status(404).json({ error: "Task not found" });
        
        // merge changes:
        Object.assign(task, { title, description, completed, priority, due_date });
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");

        res.status(200).json(task);
    } catch(e){
        next(e);
    }
});

tasksRouter.delete("/:id", (req, res, next) => {
    try{
        const id = Number(req.params.id);
        if (isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

        const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

        const index = data.tasks.findIndex(task => task.id === id);
        if (index === -1) return res.status(404).json({ error: "Task not found" });

        const deletedTask = data.tasks.splice(index, 1)[0];
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");

        return res.status(200).json(deletedTask);
    }catch(e){
        next(e);
    }
});

export default tasksRouter;