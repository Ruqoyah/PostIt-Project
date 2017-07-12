import usersController from '../controllers/users';
import groupsController from '../controllers/groups';
import messagesController from '../controllers/messages';

module.exports = (app) => {
  // signup
  app.post('/api/user/signup', usersController.signup);

  // signin
  app.post('/api/user/signin', usersController.signin);

  // create group
  app.post('/api/group', groupsController.createGroup);

  // add other user
  app.post('/api/group/:groupId/user', groupsController.addOtherUser);

  // post messages
  app.post('/api/group/:groupId/message', messagesController.postMessage);
};
