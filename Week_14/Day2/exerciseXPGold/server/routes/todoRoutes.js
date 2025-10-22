import { Router } from "express";
import { createTodo, listTodos, listTodo, updateTodo, deleteTodo } from "../controllers/todoController.js";

const router = Router();

router.post('/', createTodo);
router.get('/', listTodos);
router.get('/:id', listTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;