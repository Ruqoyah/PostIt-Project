import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

// import home from "./server/index";
// import users from "./server/users";

// Set up the express app
const app = express();

// Log requests to the console.
// app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Require our routes into the application.
require('./server/routes')(app);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));


export default app;
