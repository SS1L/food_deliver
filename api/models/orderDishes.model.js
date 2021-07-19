const Sequelize = require('sequelize');
const sequelize = require('../db/database');

const orderDishes = sequelize.define('order_dishes', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  order_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  dish_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: false,
});

module.exports = orderDishes;
