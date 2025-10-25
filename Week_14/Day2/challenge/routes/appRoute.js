import { userRegistration, userLogin, updateDetails, updatePassword, getUser, getUsers } from "../controllers/appController.js";
import express from "express";

const router = express.Router();

router.post('/register', userRegistration);
router.post('/login', userLogin);
router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.put('/:id/details', updateDetails);
router.put('/:id/password', updatePassword);

export default router;
