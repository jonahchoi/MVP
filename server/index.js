const express = require('express');
const path = require('path');
const router = require('./routes');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/', router);

const PORT = 1234;

app.listen(PORT, ()=>console.log(`Listening on port: ${PORT}`))