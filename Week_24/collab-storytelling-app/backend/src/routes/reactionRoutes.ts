import { Router } from 'express';
import { toggleReaction } from '../controllers/reactionController.js';
import { authenticateToken } from '../middleware/authenticate.js';

const router = Router();

// POST /reactions - Toggle a reaction (requires authentication)
router.post('/', authenticateToken, toggleReaction);

export default router;