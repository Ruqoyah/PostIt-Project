module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('Groups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      groupid: {
        type: Sequelize.INT,
        allowNull: false
      },
      groupname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      groupdescription: {
        type: Sequelize.STRING,
        allowNull: false
      },
      groupusers: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Groups');
};