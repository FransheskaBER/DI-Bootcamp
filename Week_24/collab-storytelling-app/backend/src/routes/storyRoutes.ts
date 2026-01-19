import { Router } from 'express';
import { getStories, getStory, getMyStories, createNewStory, updateExistingStory, deleteExistingStory, toggleCommentsController, getShareableLink } from '../controllers/storyController.js';
import { getVersionHistory, getVersion, restoreVersionController } from '../controllers/versionController.js';
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

// POST /stories/:id/toogle-comments - toggle comments on/off
router.post('/:id/toggle-comments', authenticateToken, toggleCommentsController);

// GET /stories/:id/share - get shareable link
router.get('/:id/share', getShareableLink);

// GET /stories/:storyId/versions - get version history (author only)
router.get('/:storyId/versions', authenticateToken, getVersionHistory);

// GET /stories/:storyId/versions/:versionId - get a specific version (author only)
router.get('/:storyId/versions/:versionId', authenticateToken, getVersion);

// POST /stories/:storyId/versions/:versionId/restore - restore to a previous version (author only)
router.post('/:storyId/versions/:versionId/restore', authenticateToken, restoreVersionController);

export default router;
