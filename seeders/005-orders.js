/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
const tableName = 'orders';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(tableName, [
      { total_price: 25.00, restaurant_id: 5, user_id: 2, courier_id: 1 },
      { total_price: 10.00, restaurant_id: 1, user_id: 1, courier_id: 4 },
      { total_price: 25.00, restaurant_id: 2, user_id: 5, courier_id: 2 },
      { total_price: 5.00, restaurant_id: 3, user_id: 3, courier_id: 1 },
      { total_price: 22.00, restaurant_id: 4, user_id: 4, courier_id: 3 },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(tableName, null, {});
  },
};
