module.exports = (sequelize, DataTypes) => {
  const Messages = sequelize.define('Messages', {
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
        Messages.belongsTo(models.Users, {
          foreignKey: 'userId',
        });
      }
    }
  });
  return Messages;
};
