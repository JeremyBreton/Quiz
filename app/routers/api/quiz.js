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
 * @example response - 200 - success response
 [
  {
    "id": 1,
    "quiz_name": "Quiz 1",
    "created_at": "2024-04-11T15:38:21.431Z",
    "updated_at": null,
    "theme_id": null
  },
  {
    "id": 2,
    "quiz_name": "Quiz 2",
    "created_at": "2024-04-11T15:38:21.431Z",
    "updated_at": null,
    "theme_id": null
  },
  {
    "id": 3,
    "quiz_name": "Quiz 3",
    "created_at": "2024-04-11T15:38:21.431Z",
    "updated_at": null,
    "theme_id": null
  },
  {
    "id": 35,
    "quiz_name": "Quiz 100",
    "created_at": "2024-05-17T09:13:41.140Z",
    "updated_at": null,
    "theme_id": null
  }
]
 */

// router.get('/', quizController.getAll);
// On ajoute bind car sinon this est undefined. Ici avec bind on dit que this doit suivre quizController
router.get('/', quizController.getAll.bind(quizController));

/**
 * POST /api/quiz
 *
 * @summary create a new quiz
 * @tags Quiz
 *
 * @param {Quiz} request.body - Quiz
 * 
 * @example request - Quiz data
 * {
 *   "quiz_name": "Quiz 0"
 * }
 *
 * @return {Quiz} 200 - success response
 * @return {object} 500 - internal server error
 * 
 */
router.post('/', validate(post, 'body'),quizController.create.bind(quizController));

/**
 * GET /api/quiz/{id}
 *
 * @summary get a quiz
 * @tags Quiz
 *
 * @param {number} id.path - Quiz id
 *
 * @return {Quiz} 200 - success response
 * @return {object} 500 - internal server error
 * 
 * @example response - 200 - success response
{
  "id": 2,
  "quiz_name": "Quiz 2",
  "created_at": "2024-04-11T15:38:21.431Z",
  "updated_at": null,
  "theme_id": null
}
 */
router.get('/:id([0-9]*)', quizController.getOne.bind(quizController));

/**
 * PATCH /api/quiz/{id}
 *
 * @summary modify a quiz
 * @tags Quiz
 *
 * @param {number} id.path.required - Quiz ID
 * @param {object} request.body.required - Quiz data
 *
 * @example request - Quiz data
 * {
 *   "quiz_name": "Quiz 0"
 * }
 *
 * @example response - 200 - success response
{
  "status": "success",
  "data": {
    "undefined": {
      "id": 2,
      "quiz_name": "Quiz 2",
      "created_at": "2024-04-11T15:38:21.431Z",
      "updated_at": null,
      "theme_id": null
    }
  }
}
 * @return {Quiz} 200 - success response
 * @return {object} 500 - internal server error
 */
router.patch('/:id([0-9]*)', validate(patch, 'body'),quizController.modify.bind(quizController));

/**
 * DELETE /api/quiz/{id}
 *
 * @summary delete a quiz
 * @tags Quiz
 *
 * @tags Quiz
 *
 * @param {number} id.path.required - Quiz ID
 *
 * @return {object} 204 - success response
 * @return {object} 500 - internal server error
 */
router.delete('/:id([0-9]*)', quizController.delete.bind(quizController));


module.exports = router;