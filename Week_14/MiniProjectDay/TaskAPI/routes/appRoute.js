import { getAll, getUser, registration, userlogin, updateUserController } from "../controllers/appController.js";
import { Router } from "express";

const router = Router();

router.get("/", getAll);
router.get("/:id", getUser);
router.post("/register", registration);
router.post("/login", userlogin);
router.put("/:id", updateUserController);

export default router;