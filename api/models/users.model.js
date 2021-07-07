const Sequelize = require('sequelize');
const sequelize = require('../db/database');

const Users = sequelize.define('users', {
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
}, {
  timestamps: false,
});

module.exports = Users;
