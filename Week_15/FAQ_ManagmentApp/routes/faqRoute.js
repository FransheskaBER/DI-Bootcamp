import { displayFaqs, addFaq, changePublish, displayPublishedFaqs, updateFaq, removeFaq } from "../controllers/faqController.js";
import express from "express";

const router = express.Router();

router.get("/", displayFaqs);
router.post("/", addFaq);
router.patch("/:id", changePublish);
router.get("/published", displayPublishedFaqs);
router.put("/:id", updateFaq);
router.delete("/:id", removeFaq);

export default router;