module.exports = (sequelize, DataTypes) => {
  const GroupUsers = sequelize.define('GroupUsers', {
    groupid: {
      type: DataTypes.INT,
      allowNull: false,
    },
    groupusers: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userid: {
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
  return GroupUsers;
};
