const Sequelize = require('sequelize');
const sequelize = require('../db/database');

const Courier = sequelize.define('couriers', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  order_id: {
    type: Sequelize.INTEGER,
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
}, {
  timespas: false,
});

module.exports = Courier;
