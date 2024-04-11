const debug = require('debug')('oblog:app');
const path = require('path');
const express = require('express');
const cors = require('cors');
const router = require('./routers/index.router');
// const swagger = require('./services/swagger');

const app = express();

// Swagger setup
// swagger(app, path.join(__dirname, 'routers'));

// CORS setup
// const corsOptions = {
//   origin: process.env.CORS_DOMAINS ?? '*',
// };

// // Middlewares setup
// app.use(cors(corsOptions));
// app.use(express.static(path.join(__dirname, '../public/')));
// app.use(express.json());

// app.use((request, _, next) => {
//   debug(`${request.method} ${request.url} - ${request.ip}`);
//   next();
// });

app.use(router);

module.exports = app;
