module.exports = (sequelize, DataTypes) => {
  const GroupUsers = sequelize.define('GroupUsers', {
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    classMethods: {
      associate: (models) => {
        GroupUsers.belongsToMany(models.Groups,
          { through: 'GroupUsers', foreignKey: 'userId' });
      }
    }
  });
  return GroupUsers;
};
