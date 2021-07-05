const Sequelize = require('sequelize');
const db = require('../db/database');

const user = db.define('user', {
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
  },
});

module.exports = user;
