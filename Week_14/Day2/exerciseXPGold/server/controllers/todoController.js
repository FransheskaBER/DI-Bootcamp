import { createOne, findAll, findOne, updateOne, deleteOne } from "../models/todoModel.js";

export async function createTodo(req, res, next){
    try {
        const { title, completed } = req.body;
        if (!title || completed === undefined) return res.status(400).json({ error: "Title and completed fields are required" });

        const [newTodo] = await createOne({ title, completed });
        return res.status(201).json(newTodo);
    } catch (err) {
        next(err);
    };
};

export async function listTodos(req, res, next) {
  try {
    const allTasks = await findAll();
    res.status(200).json(allTasks); 
  } catch (err) {
    next(err); // let the global error handler respond
  }
};

export async function listTodo(req, res, next){
    try {
        const id = Number(req.params.id);
        if (Number.isNaN(id)) return res.status(400).json({ error: "INVALID ID" });

        const task = await findOne(id);
        if (!task) return res.status(404).json({ error: "TASK NOT FOUND" });

        res.status(200).json(task);
    } catch (err) {
        next(err);
    }
};

export async function updateTodo(req, res, next){
    try {
        const id = Number(req.params.id);
        if (Number.isNaN(id)) return res.status(400).json({ error: "INVALID ID" });

        const { title, completed } = req.body;
        if (!title || completed === undefined) return res.status(400).json({ error: "Title and completed fields are required" });

        const [updatedTask] = await updateOne(id, { title, completed });
        if (!updatedTask) return res.status(404).json({ error: "TASK NOT FOUND" });

        res.status(200).json(updatedTask);
    } catch (err) {
        next(err);
    }
};

export async function deleteTodo (req, res, next){
    try {
        const id = Number(req.params.id);
        if (Number.isNaN(id)) return res.status(400).json({ error: "INVALID ID" });

        const [deletedTask] = await deleteOne(id);
        if (!deletedTask) return res.status(404).json({ error: "TASK NOT FOUND" });

        res.status(200).json(deletedTask);
    } catch (err) {
        next(err);
    }
};