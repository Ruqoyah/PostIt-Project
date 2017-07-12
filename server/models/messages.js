module.exports = (sequelize, DataTypes) => {
  const Messages = sequelize.define('Messages', {
    message: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    classMethods: {
      associate: (models) => {
        Messages.belongsTo(models.Users, {
          // foreignKey: 'userId',
          // as: 'users',
        });
      }
    }
  });
  return Messages;
};
