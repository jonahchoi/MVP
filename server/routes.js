const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/upload', controller.upload);

module.exports = router;