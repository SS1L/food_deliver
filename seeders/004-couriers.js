/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
const tableName = 'couriers';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(tableName, [
      { name: 'Robbie', surname: 'Greer', courier_phone: '097000000' },
      { name: 'Freyja', surname: 'Wagner', courier_phone: '097000000' },
      { name: 'Gregor', surname: 'Betts', courier_phone: '097000000' },
      { name: 'Montague', surname: 'Barrett', courier_phone: '097000000' },
      { name: 'Opal', surname: 'Kirby', courier_phone: '097000000' },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(tableName, null, {});
  },
};
