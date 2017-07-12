module.exports = (sequelize, DataTypes) => {
  const GroupUsers = sequelize.define('GroupUsers', {
    groupusers: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    classMethods: {
      associate: (models) => {
        GroupUsers.belongsTo(models.Groups, {
          // foreignKey: 'userId',
          // as: 'groups',
        });
      }
    }
  });
  return GroupUsers;
};
