const debug = require('debug')('quiz:dataMapper:core');
const client = require('../helpers/database');

/** Abstract core datamapper class. */
class CoreDataMapper {
    static tableName;
  /**
   * fetch all entries
   *
   * @returns {array} array of entries
   */
  async findAll() {
    debug(`${this.constructor.name} findAll`);
    const preparedQuery = {
      text: `SELECT * FROM "${this.constructor.tableName}" ORDER BY "id"`,
    };
    const results = await client.query(preparedQuery);
    return results.rows;
  }

  /**
   * fetch an entry according to its id
   *
   * @param {number} id - id of the entry
   * @returns an entry
   */
  async findByPk(id) {
    debug(`${this.constructor.name} findByPk(${id})`);
    const preparedQuery = {
      text: `SELECT * FROM "${tableName}" WHERE id=$1`,
      values: [id],
    };
    const results = await client.query(preparedQuery);
    return results.rows[0];
  }

//   /**
//    * create a new entry
//    *
//    * @param {Object} obj - the entry to create
//    * @returns {Object} the created entry
//    */
//   async create(createObj) {
//     debug(`${this.constructor.name} create`);
//     const results = await client.query(`SELECT * FROM ${this.constructor.insertFunc}('${JSON.stringify(createObj)}')`);
//     return results.rows[0];
//   }

//   /**
//    * modify an entry
//    *
//    * @param {number} id - the entry id
//    * @param {Object} obj - the modifications
//    * @returns {Object} the modified entry
//    */

//   async modify(modObject) {
//     debug(`${this.constructor.name} modify(${modObject.id})`);
//     const results = await client.query(`SELECT * FROM ${this.constructor.updateFunc}('${JSON.stringify(modObject)}')`);
//     return results.rows[0];
//   }

  /**
   * remove an entry
   *
   * @param {number} id - the entry id
   */
  async delete(id) {
    debug(`${this.constructor.name} delete(${id})`);
    const preparedQuery = {
      text: `DELETE FROM "${this.constructor.tableName}" WHERE id=$1`,
      values: [id],
    };
    const results = await client.query(preparedQuery);
    return results.rowCount;
  }
}

module.exports = CoreDataMapper;
