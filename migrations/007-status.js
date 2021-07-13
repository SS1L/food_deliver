/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
const tableName = 'order_status';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(tableName, {
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(tableName);
  },
};
