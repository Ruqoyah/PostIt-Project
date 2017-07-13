import express from 'express';
import bodyParser from 'body-parser';

// Set up the express app
const app = express();


// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Require our routes into the application.
require('./server/routes')(app);


export default app;
