import { Router } from "express";
import { registerUser, loginUser, getAllUsers, logOutUser, verifyAuth } from "../controllers/userController.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/users', verifyToken, getAllUsers);
router.post('/logout', logOutUser);
router.get('/auth', verifyToken, verifyAuth);

export default router;