module.exports = (sequelize, DataTypes) => {
  const Messages = sequelize.define('Messages', {
    message: {
      type: DataTypes.BODY,
      allowNull: false,
    },
    userid: {
      type: DataTypes.INT,
      allowNull: false,
    },
    groupid: {
      type: DataTypes.INT,
      allowNull: false,
    }     
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  });
  return Messages;
};
