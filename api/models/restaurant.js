const Sequelize = require('sequelize');
const db = require('../db/database');

const restaurant = db.define('restaurants', {
  restaurant_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  describe: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cousine: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = restaurant;
