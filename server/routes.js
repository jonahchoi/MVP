const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/*', controller.render);

// router.post('/upload', upload.single('file'), controller.upload);

module.exports = router;