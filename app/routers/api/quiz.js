const express = require('express');
const { quizController } = require('../../controllers/api')
const validate = require('../../validations/validate');
const { post, patch } = require('../../validations/schemas/quiz.schema')

const router = express.Router();

// router.get('/', quizController.getAll);
// On ajoute bind car sinon this est undefined. Ici avec bind on dit que this doit suivre quizController
router.get('/', quizController.getAll.bind(quizController));
router.post('/', validate(post, 'body'),quizController.create.bind(quizController));
router.get('/:id([0-9]*)', quizController.getOne.bind(quizController));
router.patch('/:id([0-9]*)', validate(patch, 'body'),quizController.modify.bind(quizController));
router.delete('/:id([0-9]*)', quizController.delete.bind(quizController));


module.exports = router;