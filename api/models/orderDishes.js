const Sequelize = require('sequelize');
const sequelize = require('../db/database');

const orderDishes = sequelize.define('order_dishes', {
  restaurant_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  order_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = orderDishes;
