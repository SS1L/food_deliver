/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
const tableName = 'users';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(tableName, [
      {
        name: 'Vlad',
        surname: 'Cobb',
        address: 'Zakharivska St, 17А',
        user_phone: '098000000',
        email: 'vlad@gmail.com',
        password: '12345',
      },
      {
        name: 'Keavy',
        surname: 'Burch',
        address: 'Lva Tolstoho St, 9A',
        user_phone: '096000000',
        email: 'xipileh990@gmail.com',
        password: '12345',
      },
      {
        name: 'Greta',
        surname: 'Lyons',
        address: "Mykoly Zakrevs'koho St, 5",
        user_phone: '098000000',
        email: 'greata@gmail.com',
        password: '12345',
      },
      {
        name: 'Gwen',
        surname: 'Ayers',
        address: 'Sortuvalna St, 15',
        user_phone: '063000000',
        email: 'gwen@gmail.com',
        password: '12345',
      },
      {
        name: 'Tarik',
        surname: 'Coulson',
        address: "Obolons'kyi Ave, 7В",
        user_phone: '097000000',
        email: 'tarik@gmail.com',
        password: '12345',
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(tableName, null, {});
  },
};
