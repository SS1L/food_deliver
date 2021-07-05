const Sequelize = require('sequelize');
const db = require('../db/database');

const couriers = db.define('couriers', {
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
});

module.exports = couriers;
