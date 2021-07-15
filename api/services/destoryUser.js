const Orders = require('../models/order.model');
const orderDishes = require('../models/orderDishes.model');

async function destroyUser(id) {
  try {
    const userOrders = await Orders.findAll({
      attributes: ['id'],
      where: { user_id: id },
    });

    if (!userOrders.length) return -1;
    userOrders.forEach(async (order) => {
      await orderDishes.destroy({ where: { order_id: order.dataValues.id } });
    });
    await Orders.destroy({ where: { user_id: id } });
  } catch (e) {
    console.log(e);
  }
}

module.exports = destroyUser;
