/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
const tableName = 'order_dishes';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(tableName, [
      { order_id: 1, dish_id: 1 },
      { order_id: 1, dish_id: 2 },
      { order_id: 2, dish_id: 4 },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(tableName, null, {});
  },
};
