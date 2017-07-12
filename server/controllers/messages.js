const Messages = require('../models').Messages;

module.exports = {
  createMessage: (req, res) => {
    if (!req.body.messages) {
      res.send({ message: 'Enter message.' });
    } else {
      const userId = req.body.userId;
      const message = {
        body: req.body.message,
        groupId: req.body.groupId,
        userId: req.body.userId
      };
      Messages
        .create({
          message: req.body.message,
          userId: req.body.userId
        })
        .then(message => res.status(201).send({
          message: 'Message sent'
        }))
        .catch(error => res.status(400).send(error));
    }
  },

  // post message
  postMessage(req, res) {
    const userId = req.decoded;
    Messages
      .create({
        groupId: req.params.groupId,
        message: req.body.message,
        userId
      })
      .then(message => res.status(201).send({
        message: (message.message)
      }))
      .catch(error => res.status(400).send(error));
  },

  // retrieve
  findMessage(req, res) {
    Messages
      .findAll({
        where: { groupId: req.params.groupId }
      })
      .then((message) => {
        if (message) {
          res.send(message);
        } else {
          res.status(400).send('Message not found');
        }
      });
  }
};
