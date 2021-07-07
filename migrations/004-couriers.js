/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
const tableName = 'couriers';

module.exports = {
  up: (queryInerface, Sequelize) => {
    return queryInerface.createTable(tableName, {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      surname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      courier_phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: (queryInerface, Sequelize) => {
    return queryInerface.dropTable(tableName);
  },
};
