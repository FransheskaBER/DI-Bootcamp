import { seeActiveUsernames, userRegistration, userLogin } from "../controllers/chatController.js";
import express from "express";

const chatRouter = express.Router();

chatRouter.get("/usernames", seeActiveUsernames);
chatRouter.post("/registration", userRegistration);
chatRouter.post("/login", userLogin);

export default chatRouter;
