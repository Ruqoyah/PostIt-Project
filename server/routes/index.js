const create_accountsController = require('../controllers').create_accounts;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Postits API!',
  }));

  app.post('/api/create_accounts', create_accountsController.create);
};