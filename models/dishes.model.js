const Sequelize = require('sequelize');
const db = require('../api/db/database');

const dishes = db.define('dishes', {
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
  }, {
    timestamps: false,
});

module.exports = dishes;
