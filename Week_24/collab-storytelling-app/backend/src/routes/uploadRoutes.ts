import { Router } from "express";
import { uploadAvatar } from "../controllers/uploadController.js";
import { authenticateToken } from "../middleware/authenticate.js";

const router = Router();

// POST /upload/avatar - upload user avatar
router.post('/avatar', authenticateToken, uploadAvatar);

export default router;