import { Router } from 'express';
import { register, login, refreshAccessToken, getCurrentUser, getAllUsersController } from '../controllers/authController.js';
import { authenticateToken } from '../middleware/authenticate.js';

const router = Router();

// POST /auth/register = Register a new user
router.post('/register', register);

router.post('/login', login);

router.post('/refresh', refreshAccessToken);

router.get('/me', authenticateToken, getCurrentUser);

router.get('/users', authenticateToken, getAllUsersController);


export default router;