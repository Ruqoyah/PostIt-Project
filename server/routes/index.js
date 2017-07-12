import usersController from '../controllers/users';
import groupsController from '../controllers/groups';

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  // signup
  app.post('/api/user/signup', usersController.signup);

  // signin
  app.post('/api/user/signin', usersController.signin);

  // create group
  app.post('/api/group', groupsController.createGroup);

  // add other user
  app.post('/api/group/:groupId/user', groupsController.addOtherUser);
};
