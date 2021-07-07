const Sequelize = require('sequelize');
const sequelize = require('../db/database');

const orderDishes = sequelize.define('orderDishes', {
  restaurant_id: {
    type: Sequelize.INTEGER,
  },
  order_id: {
    type: Sequelize.INTEGER,
  },
});

module.exports = orderDishes;
