import { Router } from 'express';
import { addStoryContributor, getStoryContributors, removeStoryContributor } from '../controllers/contributorController.js';
import { authenticateToken } from '../middleware/authenticate.js';
import { authorizeAuthor } from '../middleware/authorize.js';


const router = Router();

// POST /contributors - add a contributor to a story (requires authentication)
router.post('/', authenticateToken, addStoryContributor);

// GET /contributors/:story_id - get all contributors for a story
router.get('/:story_id', authenticateToken, getStoryContributors);

// DELETE /contributors/:id
router.delete('/:id', authenticateToken, authorizeAuthor, removeStoryContributor);

export default router;