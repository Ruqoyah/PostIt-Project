import model from '../models';

const Groups = model.Groups;
const GroupUsers = model.GroupUsers;

export default {
  // create a group
  createGroup(req, res) {
    if (!req.body.groupname) {
      res.status(400).send({ message: 'Enter group name' });
    } else {
      Groups
        .findOne({
          where: {
            groupname: req.body.groupname
          },
        })
        .then((group) => {
          if (group) {
            res.status(400).send({ message: 'Group name already exist' });
          } else {
            Groups.create({
              groupname: req.body.groupname,
              groupdescription: req.body.groupdescription,
              userId: req.body.userId
            })
              .then(createGroup => res.status(201).send({
                success: true,
                groupname: createGroup.groupname,
                message: 'Group created successfully'
              }))
              .catch(error => res.status(400).send(error));
          }
        });
    }
  },

  // add other users
  addOtherUser(req, res) {
    if (!req.body.username) {
      res.status(401).send({ message: 'Enter username' });
    } else {
      GroupUsers.findOne({
        where: {
          username: req.body.username
        },
      })
        .then((groupuser) => {
          if (groupuser) {
            res.status(400).send({ message: 'User is already a group user ' });
          } else {
            GroupUsers
              .create({
                groupId: req.params.groupId,
                username: req.body.username
              })
              .then(addUser => res.status(200).send({
                success: true,
                group_id: addUser.group_id,
                message: 'User Added successfully'
              }))
              .catch(error => res.status(400).send(error));
          }
        });
    }
  }

};
