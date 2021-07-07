const Sequelize = require('sequelize');
const sequelize = require('../db/database');

const Dish = sequelize.define('dishes', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  restaurant_id: {
    type: Sequelize.INTEGER,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  describe: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
});

module.exports = Dish;
