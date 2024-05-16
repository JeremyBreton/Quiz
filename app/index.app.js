const debug = require('debug')('quiz:app');
const path = require('path');
const express = require('express');
const cors = require('cors');
const router = require('./routers/index.router');
const exp = require('constants');
const swagger = require('./helpers/swagger');

const app = express();

// Template engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Swagger setup
swagger(app, path.join(__dirname, 'routers'));

// CORS setup
app.use(cors('*')); 
// pour utiliser sur tous les domaines

// Middlewares static
app.use(express.static(path.join(__dirname, '../public/')));

// Middleware body-parser json
app.use(express.json());

// Routes
app.use(router);

module.exports = app;
