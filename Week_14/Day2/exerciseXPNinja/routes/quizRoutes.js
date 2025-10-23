import express from 'express';
import { getQuestion, checkUserAnswer, getTotalQuestionsCount } from '../controllers/quizController.js';

const router = express.Router();

router.get('/total', getTotalQuestionsCount);
router.get('/:index', getQuestion);
router.post('/answer', checkUserAnswer);

export default router;


