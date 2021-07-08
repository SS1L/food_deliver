/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
const tableName = 'order_dishes';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(tableName, {
      order_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'orders',
          key: 'id',
        },
      },
      dish_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'dishes',
          key: 'id',
        },
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(tableName);
  },
};
