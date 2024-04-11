const express = require('express');
const quizRouter = require('./quiz.router');
// const { apiController } = require('../../controllers/api');

const router = express.Router();

// router.all('/', apiController.getHome);

router.use('/quiz', quizRouter);

module.exports = router;
