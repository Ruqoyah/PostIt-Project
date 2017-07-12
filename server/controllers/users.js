const Users = require('../models').Users;
const bcrypt = require('bcrypt');

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

module.exports = {
  // create user
  signup(req, res) {
    Users
      .findOne({
        where: {
          username: req.body.username
        },
      })
      .then(user => {
        if (user) {
          res.send({ message: 'Username already exists' });
        } else {
          Users
            .findOne({
              where: {
                email: req.body.email
              },
            })
            .then(user => {
              if (user) {
                res.send({ message: 'Email already exists' });
              } else {
                Users.create({
                  username: req.body.username,
                  firstname: req.body.firstname,
                  lastname: req.body.lastname,
                  email: req.body.email,
                  password: bcrypt.hashSync(req.body.password, salt)
                })

                  .then(user => res.status(201).send({
                    success: true,
                    message: 'User has been signed up successfully',
                    username: user.username
                  }))
                  .catch(error => res.status(400).send(error));
              }
            });
        }
      });
  },


  // user signin
  signin(req, res) {
    Users
      .findOne({
        where: {
          username: req.body.username
        },
      })
      .then((user) => {
        if (!user) {
          res.status(401).send({ success: false, message: 'User not found' });
        } else {
          if (!bcrypt.compareSync(req.body.password, user.password)) {
            res.json({ success: false, message: 'Wrong password' });
          } else {
            res.status(201).send({
              success: true,
              message: 'User successfully signed in!',
            });
          }
        }
      });
  }
};
