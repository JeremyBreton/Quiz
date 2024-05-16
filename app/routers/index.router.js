const express = require('express');
const websiteRouter = require('./website');
const apiRouter = require('./api')

const router = express.Router();
router.use('/api', apiRouter)
router.use('/', websiteRouter);

module.exports = router;
