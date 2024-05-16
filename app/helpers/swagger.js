/**
 * swagger service module.
 * @module swagger
 */

const debug = require('debug')('quiz:swagger');
const expressSwagger = require('express-jsdoc-swagger');

// swagger setup
const swaggerOptions = {
  info: {
    version: '1.0.0',
    title: 'Quiz API',
    description: 'a simple quiz api',
  },
  filesPattern: './**/*.js',
  swaggerUIPath: '/api-docs',
  exposeSwaggerUI: true,
};

/**
 * inject swaggerUI in application
 * @param {Object} app - express application
 * @param {string} baseDir - the baseDir where to search for jsdocs-swagger comments
 */
function injectSwagger(app, baseDir) {
  debug('swagger UI injected');
  swaggerOptions.baseDir = baseDir;
  expressSwagger(app)(swaggerOptions);
}

module.exports = injectSwagger;
