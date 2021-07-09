const Sequelize = require('sequelize');
const sequelize = require('../db/database');
const orderDishes = require('./orderDishes.model');

const Order = sequelize.define('orders', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  restaurant_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  total_price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
  },
  courier_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
}, {
  timestamps: false,
});

Order.hasMany(orderDishes, { foreignKey: 'order_id' });

module.exports = Order;
