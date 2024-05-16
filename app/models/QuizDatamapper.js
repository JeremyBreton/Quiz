const debug = require('debug')('quiz:dataMapper:quiz');
const CoreDataMapper = require('./CoreDatamapper');

/** Class representing a category data mapper. */
class QuizDataMapper extends CoreDataMapper {
  static tableName = 'quiz';

  static insertFunc = 'insert_quiz';

  static updateFunc = 'update_quiz';


  /**
   * create a category data mapper
   *
   * @augments CoreDataMapper
   */
  constructor() {
    super();
    debug('quiz data mapper created');
  }
}

module.exports = new QuizDataMapper();
