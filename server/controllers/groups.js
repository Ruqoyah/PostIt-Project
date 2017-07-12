const Groups = require('../models').Groups;
// create a group
module.exports = {

  createGroup(req, res) {
    if (!req.body.groupname) {
      res.status(400).send({ message: "Enter group name" });
    } else {
      groups
        .findOne({
          where: {
            groupname: req.body.groupname
          },
        })
        .then(group => {
          if (group) {
            res.status(400).send({ message: "Group name already exist" });
          } else {
            groups.create({
              groupname: req.body.groupname,
              groupdescription: req.body.groupdescription,
              id: userId
            })
              .then(group => {
                if (!group) {
                  res.status(401).send({ success: false, message: 'Authentication failed. User not found.' });
                } else {
                  res.send(400).send({ message: "Group valid" });
                }
              })
              .then(group => res.status(201).send({
                success: true,
                groupname: group.groupname,
                message: "Group created successfully"
              }))
              .catch(error => res.status(400).send(error));
           }
            })
        }
      }
  },

    //add member
    addGroupUser(req, res) {
      if (!req.body.username) {
        res.status(401).send({ message: "Enter username" })
      } else {
        users.findOne({
          where: {
            username: req.body.username
          },
        })
          .then(group_user =>  {
          if (group_user) {
            res.status(400).send({ message: "User is already a group user " });
          } else {
            group_users
              .create({
                group_id: req.body.group_id,
                user_id: req.body.user_id
              })
              .then(group_user => res.status(201).send({
                success: true,
                group_id: message.group_id,
                message: "User Added successfully"
              }))
              .catch(error => res.status(400).send(error));
               }
            })
        }
      })
  },