/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
const tableName = 'order_status';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(tableName, [
      { status: 'confirmed' },
      { status: 'In way' },
      { status: 'Delivered' },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(tableName, null, {});
  },
};
