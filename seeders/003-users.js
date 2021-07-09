/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
const tableName = 'users';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(tableName, [
      { name: 'Vlad', surname: 'Cobb', address: 'Zakharivska St, 17А', user_phone: '098000000' },
      { name: 'Keavy', surname: 'Burch', address: 'Lva Tolstoho St, 9A', user_phone: '096000000' },
      { name: 'Greta', surname: 'Lyons', address: "Mykoly Zakrevs'koho St, 5", user_phone: '098000000' },
      { name: 'Gwen', surname: 'Ayers', address: 'Sortuvalna St, 15', user_phone: '063000000' },
      { name: 'Tarik', surname: 'Coulson', address: "Obolons'kyi Ave, 7В", user_phone: '097000000' },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(tableName, null, {});
  },
};
