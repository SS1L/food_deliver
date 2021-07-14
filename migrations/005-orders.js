/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
const tableName = 'orders';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(tableName, {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      total_price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      order_time: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      order_delivered: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      restaurant_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'restaurants',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      courier_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'couriers',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(tableName);
  },
};
