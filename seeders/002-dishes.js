/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
const tableName = 'dishes';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(tableName, [
      { name: 'Pizza', describe: 'little describe', price: 12.00, restaurant_id: 1 },
      { name: 'Pasta', describe: 'little describe', price: 10.00, restaurant_id: 1 },
      { name: 'Pizza', describe: 'little describe', price: 5.00, restaurant_id: 2 },
      { name: 'Pizza', describe: 'little describe', price: 14.00, restaurant_id: 3 },
      { name: 'Pizza', describe: 'little describe', price: 22.00, restaurant_id: 4 },
      { name: 'Pizza', describe: 'little describe', price: 25.00, restaurant_id: 5 },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(tableName, null, {});
  },
};
