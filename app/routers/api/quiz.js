const express = require('express');
const { quizController } = require('../../controllers/api')
const validate = require('../../validations/validate');
const { post, patch } = require('../../validations/schemas/quiz.schema')

const router = express.Router();

/**
 * a quiz type
 *
 * @typedef {object} Quiz
 * @property {number} id - quiz id
 * @property {string} quiz_name - quiz name

 */

/**
 * GET /api/quiz
 *
 * @summary get all quiz
 * @tags Quiz - All quiz in the app
 *
 * @return {array<Quiz>} 200 - success response
 * @return {object} 500 - internal server error
 */

// router.get('/', quizController.getAll);
// On ajoute bind car sinon this est undefined. Ici avec bind on dit que this doit suivre quizController
router.get('/', quizController.getAll.bind(quizController));

/**
 * POST /api/quiz
 *
 * @summary Create a new quiz
 * @tags Quiz
 *
 * @param {Quiz} request.body - Quiz
 *
 * @return {Quiz} 200 - success response
 * @return {object} 500 - internal server error
 */
router.post('/', validate(post, 'body'),quizController.create.bind(quizController));
router.get('/:id([0-9]*)', quizController.getOne.bind(quizController));
router.patch('/:id([0-9]*)', validate(patch, 'body'),quizController.modify.bind(quizController));
router.delete('/:id([0-9]*)', quizController.delete.bind(quizController));


module.exports = router;