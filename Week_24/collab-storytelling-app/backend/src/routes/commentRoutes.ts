import { Router } from "express";
import { addComment, getStoryComments, updateCommentController, deleteCommentController } from "../controllers/commentController.js";
import { authenticateToken } from "../middleware/authenticate.js";

const router = Router();


// POST /comments - Add a comment (requires authentication)
router.post('/', authenticateToken, addComment);

// GET /comments/:story_id - get all comments for a story
router.get('/:story_id', authenticateToken, getStoryComments);

// PATCH /comments/:id
router.patch('/:id', authenticateToken, updateCommentController);

// DELETE /comments:/:id
router.delete('/:id', authenticateToken, deleteCommentController);

export default router;

