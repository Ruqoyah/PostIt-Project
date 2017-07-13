const Users = require('../models').Users;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;

module.exports = {
  // create user
  signup(req, res) {
    Users
      .findOne({
        where: {
          username: req.body.username
        },
      })
      .then((user) => {
        if (user) {
          res.send({ message: 'Username already exists' });
        } else {
          Users
            .findOne({
              where: {
                email: req.body.email
              },
            })
            .then((createdUser) => {
              if (createdUser) {
                res.send({ message: 'Email already exists' });
              }
              if (req.body.password !== req.body.cpassword) {
                res.send({ message: 'Password does not match' });
              } else {
                bcrypt.hash(req.body.password, saltRounds)
                  .then((hash) => {
                    Users.create({
                      username: req.body.username,
                      firstname: req.body.firstname,
                      lastname: req.body.lastname,
                      email: req.body.email,
                      password: hash,
                      cpassword: hash
                    })
                      .then(display => res.status(201).send({
                        success: true,
                        message: 'User has been signed up successfully',
                        username: display.username
                      }))
                      .catch(error => res.status(400).send(error));
                  });
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
        }
        if (!bcrypt.compareSync(req.body.password, user.password)) {
          res.json({ success: false, message: 'Wrong password' });
        } else {
          const id = user.id;
          const token = jwt.sign(id, 'superSecret');
          res.status(201).send({
            success: true,
            message: 'User successfully signed in!',
            token
          });
        }
      });
  }
};
