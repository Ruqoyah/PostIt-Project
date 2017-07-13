import express from 'express';
import bodyParser from 'body-parser';
import routes from './server/routes';

// Set up the express app
const router = express();


// Parse incoming requests data (https://github.com/expressjs/body-parser)
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));


// Require our routes into the routerlication.
router.use(routes);


export default router;
