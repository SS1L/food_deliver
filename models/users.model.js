const Sequelize = require('sequelize');
const db = require('../api/db/database');

const users = db.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  surname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  user_phone: {
    type: Sequelize.STRING,
    allowNull: false,
  }, {
    timestamps: false,
});

module.exports = users;
