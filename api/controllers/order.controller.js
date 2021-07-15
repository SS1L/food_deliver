const Orders = require('../models/order.model');
const User = require('../models/users.model');
const Dish = require('../models/dishes.model');
const orderDish = require('../models/orderDishes.model');

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
    if (!order) throw new SyntaxError("Can't find this order");

    res.json({ data: order });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const getAvailableOrder = async (req, res) => {
  try {
    const order = await Orders.findAll({ where: { courier_id: null } });
    if (!order) throw new SyntaxError("Can't find any order");

    res.status(200).json({ data: order });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const createOrder = async (req, res) => {
  const { userId, restaurantId, dishId } = req.body;
  let totalPrice = 0;
  try {
    const dish = await Dish.findAll({ where: { id: dishId } });
    dish.forEach((element) => {
      if (restaurantId !== element.restaurant_id) throw new SyntaxError('Something went wrong');
      totalPrice += +element.price;
    });

    const user = await User.findByPk(userId);
    if (!user) throw new SyntaxError("Can't find this user");

    const order = await Orders.create(
      {
        user_id: userId,
        status: 'Confirmed',
        restaurant_id: restaurantId,
        total_price: totalPrice.toFixed(2),
        order_time: new Date(),
      },
    );
    if (!order.dataValues) throw new SyntaxError('Someting went wrong');
    // need fix
    for (let i = 0; i < dishId.length; i++) {
      await orderDish.create({ order_id: order.dataValues.id, dish_id: dishId[i]});
    }

    res.status(200).json({ data: order });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const confirmOrder = async (req, res) => {
  const { id } = req.params;
  const { courierId } = req.body;
  try {
    await Orders.update(
      { courier_id: courierId, status: 'In way' },
      { where: { id } },
    );

    res.status(200).json({ message: 'Order confimed' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const deliveredOrder = async (req, res) => {
  const { id } = req.params;
  try {
    await Orders.update(
      { order_delivered: new Date(), status: 'Delivered' },
      { where: { id } },
    );
    res.status(200).json({ message: 'Order delivered' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Orders.destroy({ where: { id } });
    if (!order) throw new SyntaxError("Can't find any order");

    res.status(200).json({ message: 'Order deleted' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports = {
  getOrders,
  getOrderId,
  getAvailableOrder,
  confirmOrder,
  createOrder,
  deliveredOrder,
  deleteOrder,
};
