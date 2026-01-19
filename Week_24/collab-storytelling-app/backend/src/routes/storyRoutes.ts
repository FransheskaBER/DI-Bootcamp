import { Router } from 'express';
import { getStories, getStory, getMyStories, createNewStory, updateExistingStory, deleteExistingStory } from '../controllers/storyController.js';
import { authenticateToken } from '../middleware/authenticate.js';
import { authorizeAuthor, authorizeAuthorOrContributor } from '../middleware/authorize.js';

const router = Router();

// GET /stories all stories - requires authentication
router.get('/', authenticateToken, getStories);

// GET /stories/my (get current user's stories)
router.get('/my', authenticateToken, getMyStories);

// GET /stories/:id (get a single story)
router.get('/:id', authenticateToken, getStory);

// POST /stories (create a new story requires authentication)
router.post('/', authenticateToken, createNewStory);

// PATCH /stories/:id (update story requires authentication and authorization)
router.patch('/:id', authenticateToken, authorizeAuthorOrContributor, updateExistingStory);

// DELETE /stories/:id
router.delete('/:id', authenticateToken, authorizeAuthor, deleteExistingStory);

export default router;
