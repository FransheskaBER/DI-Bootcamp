import { getTotalQuestions, getQuestionWithOptionsByIndex, checkAnswer } from "../models/quizModel.js";


export async function getQuestion(req, res, next){
    try {
        const index = Number(req.params.index);
        if (isNaN(index) || index < 0) return res.status(400).json({ error : 'Invalid Index' });
        
        const questionObj = await getQuestionWithOptionsByIndex(index);
        if (!questionObj) return res.status(404).json({ error: "No more questions" });

        return res.status(200).json(questionObj);
    } catch (err) {
        next(err); // we will handle this error gloablly in the exerciseXPNinja/server.js 
    }
}

export async function checkUserAnswer(req, res, next){
    try{
        const { questionId, optionId } = req.body;
        const qId = Number(questionId);
        const oId = Number(optionId);
        if (Number.isNaN(qId) || Number.isNaN(oId)) return res.status(400).json({ error: 'Question id and option id must be numbers' });

        const correct = await checkAnswer(qId, oId);
        return res.status(200).json({ correct });
    } catch (err) {
        next(err);
    }
}

export async function getTotalQuestionsCount(req, res, next){
    try{
        const totalQuestions = await getTotalQuestions()
        return res.status(200).json({ totalQuestions });
    } catch (err) {
        next(err);
    }
}
