const express = require('express');
const { questionController } = require('../../controllers/api');
const validate = require('../../validations/validate');
const { post, patch } = require('../../validations/schemas/question.schema')

const router = express.Router();

/**
 * a question type
 *
 * @typedef {object} Question
 * @property {number} id - question id
 * @property {string} question_text - question text
 * @property {number} quiz_id - quiz id for question
 * @property {number} theme_id - theme id for question
 */

/**
 * GET /api/question
 *
 * @summary get all questions
 * @tags Question - All questions in the app
 *
 * @return {array<Question>} 200 - success response
 * @return {object} 500 - internal server error
 * @example response - 200 - success response
[
  {
    "id": 1,
    "question_text": "Combien font 1+1 ?",
    "quiz_id": 1,
    "created_at": "2024-04-11T15:38:21.431Z",
    "updated_at": null,
    "theme_id": 1
  },
  {
    "id": 2,
    "question_text": "Combien font 2+2 ?",
    "quiz_id": 1,
    "created_at": "2024-04-11T15:38:21.431Z",
    "updated_at": null,
    "theme_id": 1
  }
]
 */
router.get('/', questionController.getAll.bind(questionController));

/**
 * POST /api/question
 *
 * @summary create a new question
 * @tags Question
 *
 * @param {Question} request.body - Question
 *
 * @return {Question} 200 - success response
 * @return {object} 500 - internal server error
 * 
 * @example response - 200 - success response
 {
  "status": "success",
  "data": {
    "undefined": {
      "id": 46,
      "question_text": "Question test pour Swagger",
      "quiz_id": 1,
      "created_at": "2024-05-30T15:07:53.911Z",
      "updated_at": null,
      "theme_id": 1
    }
  }
}
 */
router.post('/', validate(post, 'body'),questionController.create.bind(questionController));
router.get('/:id([0-9]*)', questionController.getOne.bind(questionController));
router.get('/quiz/:id([0-9]*)', questionController.getQuestionsFromQuiz.bind(questionController));
router.patch('/:id([0-9]*)', validate(patch, 'body'),questionController.modify.bind(questionController));
router.delete('/:id([0-9]*)', questionController.delete.bind(questionController));


module.exports = router;