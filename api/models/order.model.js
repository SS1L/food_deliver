const Sequelize = require('sequelize');
const sequelize = require('../db/database');
const orderDishes = require('./orderDishes.model');

const Order = sequelize.define('orders', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  total_price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  order_time: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  order_delivered: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  restaurant_id: {
    type: Sequelize.INTEGER,
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
