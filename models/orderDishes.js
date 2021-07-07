const Sequelize = require('sequelize');
const db = require('../api/db/database');

const orderDishes = db.define('orderDishes', {
  restaurant_id: {
    type: Sequelize.INTEGER,
  },
  order_id: {
    type: Sequelize.INTEGER,
  },
});

module.exports = orderDishes;
