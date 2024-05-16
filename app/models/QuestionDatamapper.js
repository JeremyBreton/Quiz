const debug = require('debug')('quiz:dataMapper:question');
const CoreDataMapper = require('./CoreDatamapper');
const client = require('../helpers/database');

/** Class representing a category data mapper. */
class QuestionDataMapper extends CoreDataMapper {
  static tableName = 'question';

 /**
   * create a question data mapper
   *
   * @augments CoreDataMapper
   */
 constructor() {
    super();
    debug('question data mapper created');
  }

  /**
   * fetch all questions from a given quiz
   *
   * @param {number} quizId
   * @returns {array}
   */
  async findQuestionsFromQuiz(quizId) {
    debug(`${this.constructor.name} findPostsFromCategory(${quizId})`);
    const preparedQuery = {
        // this.constructor ==> reference à la classe qui instancie mon objet
      text: `SELECT * FROM "${this.constructor.tableName}" WHERE quiz_id=$1 ORDER BY "id"`,
      values: [quizId],
    };
    const results = await client.query(preparedQuery);
    return results.rows;
  }
}

module.exports = new QuestionDataMapper();
