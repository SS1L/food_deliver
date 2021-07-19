const Sequelize = require('sequelize');
const sequelize = require('../db/database');
const Restaurant = require('./restaurant.model');

const Dish = sequelize.define('dishes', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  restaurant_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
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
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
}, {
  timestamps: false,
});

Dish.hasMany(Restaurant, { foreignKey: 'id', sourceKey: 'restaurant_id' });

module.exports = Dish;
