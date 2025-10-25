import { userRegistration, userLogin, updateDetails, updatePassword } from "../controllers/appController.js";
import express from "express";

const router = express.Router();

router.post('/register', userRegistration);
router.post('/login', userLogin);
router.put('/:id/details', updateDetails);
router.put('/:id/password', updatePassword);

export default router;
