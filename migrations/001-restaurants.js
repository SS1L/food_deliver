/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
const tableName = 'restaurants';

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
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cousine: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: (queryInerface, Sequelize) => {
    return queryInerface.dropTable(tableName);
  },
};
