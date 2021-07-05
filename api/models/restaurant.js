const Sequelize = require('sequelize');
const db = require('../db/database');

const restaurants = db.define('restaurants', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cousine: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = restaurants;
