import model from '../models';

const Messages = model.Messages;

export default {
  // post message
  postMessage(req, res) {
    Messages
      .create({
        groupId: req.params.groupId,
        message: req.body.message,
        userId: req.body.userId
      })
      .then(message => res.status(201).send({
        message: (message.message)
      }))
      .catch(error => res.status(400).send(error));
  },

  // retrieve
  findMessages(req, res) {
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
