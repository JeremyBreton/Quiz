const debug = require('debug')('quiz:controller:quiz');
const CoreController = require('./CoreController');
const questionDatamapper = require('../../models/QuestionDatamapper');

class QuestionController extends CoreController {
    static dataMapper = questionDatamapper;

    constructor() {
        super()
        debug('questionController created');
    }

    async getQuestionsFromQuiz(request, response){
        const quizId = request.params.id;
        const quiz = await this.constructor.dataMapper.findQuestionsFromQuiz(quizId);
        response.json(quiz);
    }
}

module.exports = new QuestionController();