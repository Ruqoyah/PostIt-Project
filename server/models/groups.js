module.exports = (sequelize, DataTypes) => {
  const Groups = sequelize.define('Groups', {
    groupname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    groupdescription: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    classMethods: {
      associate: (models) => {
        Groups.belongsToMany(models.Users,
          { through: 'GroupUsers', foreignKey: 'groupId' });
      }
    }
  });
  return Groups;
};
