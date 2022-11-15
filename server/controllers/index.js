const models = require('../models');
const path = require('path');

module.exports = {
  render: (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'), (err) => {
      res.status(500).send(err);
    });
  },
  upload: async (req, res) => {
    try{
      let url = await models.addFile(req.file);

      res.status(201).send(url);
    } catch(err) {
      res.sendStatus(500);
    }

  }
}