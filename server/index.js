require('dotenv').config();
const express = require('express');
const path = require('path');
const livereload = require('livereload');
const connectLiveReload = require('connect-livereload');
const liveReloadServer = livereload.createServer();
const router = require('./routes');

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh('/');
  }, 100);
});

const app = express();

app.use(connectLiveReload());

app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/', router);

const PORT = 1111;

app.listen(PORT, ()=>console.log(`Listening on port: ${PORT}`))