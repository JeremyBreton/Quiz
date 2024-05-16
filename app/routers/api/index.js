const express = require('express');
const questionRouter = require('./question');
const quizRouter = require('./quiz');
const apiErrorHandler = require('../../errors/helpers/apiErrorHandler');
const NoResourceFoundError = require('../../errors/NoResourceFoundError');

const router = express.Router();

router.use('/quiz', quizRouter);
router.use('/question', questionRouter);

router.use((request, response, next) => {
    next(new NoResourceFoundError());
});

router.use(apiErrorHandler);

module.exports = router;