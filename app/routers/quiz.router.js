const express = require('express');
const quizController = require("../controllers/index.controller");

const router = express.Router();

router.get('/all', quizController.getQuiz);

module.exports = router;