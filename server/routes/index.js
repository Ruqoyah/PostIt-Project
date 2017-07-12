const usersController = require('../controllers').users;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  // signup
  app.post('/api/user/signup', usersController.signup);

  // signin
  app.post('/api/user/signin', usersController.signin);
};
