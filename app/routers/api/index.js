const express = require('express');
const questionRouter = require('./question');
const quizRouter = require('./quiz');
const apiErrorHandler = require('../../errors/helpers/apiErrorHandler');
const NoResourceFoundError = require('../../errors/NoResourceFoundError');

const router = express.Router();

/**
 * GET /api
 *
 * @summary get API documentation URL
 * @tags Docs - The blog's API documentation
 *
 * @return {object} 200 - success response
 */

router.use('/quiz', quizRouter);
router.use('/question', questionRouter);

router.use((request, response, next) => {
    next(new NoResourceFoundError());
});

router.use(apiErrorHandler);

module.exports = router;