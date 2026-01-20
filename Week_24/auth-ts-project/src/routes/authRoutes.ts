import { Router } from "express";
import { register, login, logout, refreshAccessToken } from "../controllers/authController.js";
// import { authenticateToken } from "../middlewares/authentication.js";


const router = Router();

// POST /auth/register
router.post('/register', register);

// POST /auth/login
router.post('/login', login);

// POST /auth/logout
router.post('/logout', logout);

// POST /auth/refresh
router.post('/refresh', refreshAccessToken)

export default router;