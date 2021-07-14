/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
const tableName = 'orders';

const dateObj = new Date();
const year = dateObj.getUTCFullYear();
const month = dateObj.getUTCMonth() + 1;
const day = dateObj.getUTCDay();
const hours = dateObj.getHours();
const minute = dateObj.getMinutes();
const second = dateObj.getSeconds();

const newDate = `${day}\\${month}\\${year}  ${hours}:${minute}:${second}`;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(tableName, [
      {
        total_price: 25.00,
        order_time: new Date(),
        restaurant_id: 5,
        user_id: 2,
        courier_id: 1,
      },
      {
        total_price: 10.00,
        order_time: new Date(),
        restaurant_id: 1,
        user_id: 1,
        courier_id: 4,
      },
      {
        total_price: 25.00,
        order_time: new Date(),
        restaurant_id: 2,
        user_id: 5,
        courier_id: 2,
      },
      {
        total_price: 5.00,
        order_time: new Date(),
        restaurant_id: 3,
        user_id: 3,
        courier_id: 1,
      },
      {
        total_price: 22.00,
        order_time: new Date(),
        restaurant_id: 4,
        user_id: 4,
        courier_id: 3,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(tableName, null, {});
  },
};
