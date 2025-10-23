import db from "../config/db.js";

// return the total of questions as a number:
export async function getTotalQuestions(){
    //SELECT COUNT(*) FROM questions;
    const [{ total }] = await db('questions').count({ total: 'id'});
    return Number(total);
}

export async function getQuestionWithOptionsByIndex(index){
// SELECT q.id AS question_id, q.question, o.id AS option_id, o.option_text
// FROM questions q
// JOIN questions_options qo ON q.id = qo.question_id
// JOIN options o ON qo.option_id = o.id
// ORDER BY q.id
// LIMIT 1 OFFSET {index}; (offset means that skip and start from number X)
    // Get one question using limit + offset:
    const question = await db('questions').select('id', 'question').orderBy('id').limit(1).offset(index).first();
    if (!question) return null;

    // Get its options:
    const options = await db('options as o').join('questions_options as qo', 'o.id', 'qo.option_id').select('o.id', 'o.option_text').where('qo.question_id', question.id).orderBy('o.id');

    // return formatted objects:
    return {
        id: question.id,
        question: question.question,
        options: options.map((option) => ({ id: option.id, text: option.option_text}))
    };
}

export async function checkAnswer(questionId, optionId){
    // SELECT is_correct FROM questions_options
    // WHERE question_id = ? AND option_id = ?;
    const row = await db('questions_options').select('is_correct').where({ question_id: questionId, option_id: optionId}).first();
    return row ? Boolean(row.is_correct) : false;
}

