const Sequelize = require('sequelize');
const db = require('../db/database');

const order = db.define('order', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  restaurant_id: {
    type: Sequelize.INTEGER,
  },
  dish_id: {
    type: Sequelize.INTEGER,
  },
  courier_id: {
    type: Sequelize.INTEGER,
  },
  total_price: {
    type: Sequelize.DECIMAL,
  },
});

module.exports = order;
