const express = require('express');
const { questionController } = require('../../controllers/api');
const validate = require('../../validations/validate');
const { post, patch } = require('../../validations/schemas/question.schema')

const router = express.Router();

router.get('/', questionController.getAll.bind(questionController));
router.post('/', validate(post, 'body'),questionController.create.bind(questionController));
router.get('/:id([0-9]*)', questionController.getOne.bind(questionController));
router.get('/quiz/:id([0-9]*)', questionController.getQuestionsFromQuiz.bind(questionController));
router.patch('/:id([0-9]*)', validate(patch, 'body'),questionController.modify.bind(questionController));
router.delete('/:id([0-9]*)', questionController.delete.bind(questionController));


module.exports = router;