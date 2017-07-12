module.exports = (sequelize, DataTypes) => {
  const Groups = sequelize.define('Groups', {
    groupname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    groupdescription: {
      type: DataTypes.STRING,
      allowNull: false
    },
    groupusers: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: (models) => {
        Groups.belongsTo(models.Users, {
          // foreignKey: 'groupId',
          // as: 'groups',
        });
      }
    }
  });
  return Groups;
};
