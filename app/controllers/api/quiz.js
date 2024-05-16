const debug = require('debug')('quiz:controller:quiz');
const CoreController = require('./CoreController');
const quizDatamapper = require('../../models/QuizDatamapper');

class QuizController extends CoreController {
    static dataMapper = quizDatamapper;

    constructor() {
        super()
        debug('quizController created');
    }
}

module.exports = new QuizController();