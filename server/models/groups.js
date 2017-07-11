module.exports = (sequelize, DataTypes) => {
  const Groups = sequelize.define('Groups', {
    groupid: {
      type: DataTypes.INT,
      allowNull: false,
    },
    groupname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    groupdescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    groupusers: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  });
  return Groups;
};
