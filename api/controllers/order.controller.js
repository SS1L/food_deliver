const moment = require('moment');
const Orders = require('../models/order.model');
const User = require('../models/users.model');
const Dish = require('../models/dishes.model');
const orderDish = require('../models/orderDishes.model');
const Courier = require('../models/couriers.model');

const getOrders = async (req, res) => {
  try {
    const order = await Orders.findAll({ includes: { all: true } });

    res.status(200).json({ data: order });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const getOrderId = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Orders.findAll({
      include: {
        model: orderDish,
        where: { order_id: id },
        right: true,
      },
    });
    if (!order.length) throw new Error("Can't find this order");

    res.status(200).json({ data: order });
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

const getAvailableOrder = async (req, res) => {
  try {
    const order = await Orders.findAll({
      where: { courier_id: null },
      include: {
        model: orderDish,
        right: true,
      },
    });
    if (!order.length) throw new Error("Can't find any order");

    res.status(200).json({ data: order });
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

const createOrder = async (req, res) => {
  const { userId, restaurantId, dishId } = req.body;
  let totalPrice = 0;
  try {
    const dish = await Dish.findAll({ where: { id: dishId } });
    dish.forEach((element) => {
      if (restaurantId !== element.restaurant_id) throw new Error('Something went wrong');
      totalPrice += +element.price;
    });

    const user = await User.findByPk(userId);
    if (!user) throw new Error("Can't find this user");

    const order = await Orders.create(
      {
        user_id: userId,
        status: 'Confirmed',
        restaurant_id: restaurantId,
        total_price: totalPrice.toFixed(2),
        order_time: moment().format('DD MMMM YYYY, H:m:s'),
      },
    );
    if (!order.dataValues) throw new Error('Someting went wrong');

    Promise.all(dishId.map(async (id) => {
      await orderDish.create({ order_id: order.dataValues.id, dish_id: id });
    }));

    res.status(201).json({ message: 'Order created', data: order });
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

const confirmOrder = async (req, res) => {
  const { id } = req.params;
  const { courierId } = req.body;
  try {
    const courier = await Courier.findAll({ where: { id: courierId } });
    if (!courier.length) throw new Error("Can't find this courier");

    const order = await Orders.findByPk(id);
    if (!order) throw new Error("Can't find order");
    const inWayOrder = await Orders.findAll({ where: { id, status: 'In way' } });

    if (inWayOrder.length) {
      await Orders.update(
        { order_delivered: moment().format('DD MMMM YYYY, H:m:s'), status: 'Delivered' },
        { where: { id } },
      );
      return res.status(200).json({ message: 'Order delivered' });
    }

    await Orders.update(
      { courier_id: courierId, status: 'In way' },
      { where: { id } },
    );

    res.status(200).json({ message: 'Order confimed' });
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

const deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    await orderDish.destroy({ where: { order_id: id } });
    const order = await Orders.destroy({ where: { id } });
    if (!order) throw new Error("Can't find any order");

    res.status(200).json({ message: 'Order deleted' });
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

module.exports = {
  getOrders,
  getOrderId,
  getAvailableOrder,
  confirmOrder,
  createOrder,
  deleteOrder,
};
