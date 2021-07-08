const db = require('../db/database');
const Orders = require('../models/order.model');
const User = require('../models/users.model');
const Restaurant = require('../models/restaurant.model');
const Courier = require('../models/couriers.model');
const orderDish = require('../models/orderDishes.model');

const getOrders = async (req, res) => {
  try {
    const order = await Orders.findAll({ includes: { all: true } });

    res.status(200).json({ data: order });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// need fix
const getOrderId = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Orders.findAll({
      include: {
        model: orderDish,
        where: { order_id: id },
        right: true,
      },
    });

    res.json(order);
    // const order = await db.query(`SELECT  orders.order_id, user_id, restaurant_id, courier_id, total_price,dish_id  FROM orders INNER JOIN order_dish ON orders.order_id = order_dish.order_id WHERE orders.order_id=${id}`);
    // if (!order.rowCount) throw new SyntaxError('Someting went wrong');

    // const groupOrders = order.rows;
    // const newDishId = [];
    // groupOrders.forEach((element) => {
    //  newDishId.push(element.dish_id);
    // });
    // console.log(groupOrders);

    // res.status(200).json({
    //   orderId: groupOrders[0].order_id,
    //   userId: groupOrders[0].user_id,
    //   restaurantId: groupOrders[0].restaurant_id,
    //   courierId: groupOrders[0].courier_id,
    //   totalPrice: groupOrders[0].total_price,
    //   dishId: newDishId,
    // });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// need fix;
const getNullOrder = async (req, res) => {
  try {
    const order = await Orders.findAll({ where: { courier_id: null } });

    res.status(200).json(order);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const createOrder = async (req, res) => {
  try {
    const { userId, restaurantId, courierId, dishId, total_price } = req.body;

    const user = await User.findByPk(userId);
    if (!user) throw new SyntaxError("Can't find this user");

    const restaurant = await Restaurant.findByPk(restaurantId);
    if (!restaurant) throw new SyntaxError("Can't find this restaurant");

    const order = await Orders.build(
      { user_id: userId, restaurant_id: restaurantId, total_price }
    );

    await order.save();

//     const data = dishes.rows;
//     let totalPrice = 0;
//     data.forEach((elemet) => {
//       if (data[0].restaurant_id !== restaurantId) throw new SyntaxError('You can`t order in many restaurant');
//       totalPrice += +elemet.price.replace('$', '');
//     });

//     const d = await db.query(`INSERT INTO orders (user_id, restaurant_id, courier_id, total_price)
//                   VALUES ($1, $2, $3, $4) RETURNING order_id`, [userId, restaurantId, courierId, totalPrice]);
//     if (!d.rowCount) throw new SyntaxError('Something went wrong');
//     console.log(d.rows[0].order_id);
//     for (i in dishId) {
//       db.query('INSERT INTO order_dish(order_id, dish_id) values($1, $2)', [d.rows[0].order_id, dishId[i]], (err) => {
//         if (err) throw new SyntaxError('Something went wrong');
//       });
// }

    res.status(200).json(order);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
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
  createOrder,
  deleteOrder,
};
