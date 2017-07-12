const Messages = require('../models').Messages;

module.exports = {
  createMessage: (req, res) => {
    if (!req.body.messages) {
      res.send({message: 'Enter message.'});
    } else {
      const user_id = req.body.user_id;
      const message = {
        body: req.body.messages,
        group_id: req.body.group_id,
        user_id: req.body.user_id
      };
      messages
      .create({
        messages: req.body.messages,
        user_id: req.body.user_id
      })
      .then(messages => res.status(201).send(
      {message: 'Message sent'

      }))
      .catch(error => res.status(400).send(error));
  }
},

 //post message
postMessage(req, res) {
  const userId = req.decoded;
  messages
    .create({
      groupId: req.params.groupId,
      message_body: req.body.message_body,
      userId: userId
    })
    .then(message => res.status(201).send({
      message: (message.message_body)
    }))
    .catch(error => res.status(400).send(error));
},

//check
findMessage(req, res) {
  messages
    .findAll({
      where: { group_id: req.params.group_id }
    })
    .then((message) => {
      if (message) {
        res.send(message);
      } else {
        res.status(400).send("Message not found");
      }
    });


}
};
};