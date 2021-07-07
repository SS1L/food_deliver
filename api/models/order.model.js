const Sequelize = require('sequelize');
const sequelize = require('../db/database');

const Order = sequelize.define('orders', {
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
}, {
  timestamps: false,
});

module.exports = Order;
