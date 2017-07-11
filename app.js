import express from 'express';
import path from 'path';
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

app.use(express.static(path.join(__dirname, 'template')));
const port = process.env.PORT || 3000;
// Require our routes into the application.
// app.use('/', home);
// app.use('/users', users);

// app.set('port', (process.env.PORT || 3000));
// app.listen(port, () => {
//   console.log('Server started on port');
// });
export default app;
