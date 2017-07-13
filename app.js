import express from 'express';
import bodyParser from 'body-parser';
import routes from './server/routes';

// Set up the express app
const app = express();


// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Require our routes into the application.
app.use(routes);


export default app;
