import express from 'express';
import session from 'express-session';
import usersController from '../controllers/users';
import groupsController from '../controllers/groups';
import messagesController from '../controllers/messages';

const app = express.Router();

app.use(session({ secret: 'blocker',
  resave: true,
  saveUnintialized: true }));

// signup
app.post('/api/user/signup', usersController.signup);

// signin
app.post('/api/user/signin', usersController.signin);

// define middleware for route
app.use('*', (req, res, next) => {
  // check authentication
  if (!req.session.user) {
    res.status(401).send({ message: 'You need to create an account' });
  }
  next();
});

// create group
app.post('/api/group', groupsController.createGroup);

// add other user
app.post('/api/group/:groupId/user', groupsController.addOtherUser);

// post messages
app.post('/api/group/:groupId/message', messagesController.postMessage);

// retrieve messages
app.get('/api/group/:groupId/messages', messagesController.findMessages);


export default app;
