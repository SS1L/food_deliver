const db = require('../db/database');

const getOrders = async (req, res) => {
  try {
    res.status(200).json('all work');
  } catch (e) {
    res.status(500).json(e);
  }
};

const getOrderId = async (req, res) => {
  try {
    // change
    const { id } = req.params;
    const order = await db.query(`SELECT  orders.order_id, user_id, restaurant_id, courier_id, total_price,dish_id  FROM orders INNER JOIN order_dish ON orders.order_id = order_dish.order_id WHERE orders.order_id=${id}`);
    if (!order.rowCount) throw new SyntaxError('Someting went wrong');
    console.log(order.rows);
    const groupOrders = order.rows;
    const newDishId = [];
    groupOrders.forEach((order) => {
      newDishId.push(order.dish_id);
    });
    console.log(groupOrders)
    // const  {orderId: groupOrders[0], } = newData;
    res.status(200).json( {
      orderId: groupOrders[0].order_id, 
      userId: groupOrders[0].user_id,
      restaurantId: groupOrders[0].restaurant_id,
      courierId: groupOrders[0].courier_id,
      totalPrice: groupOrders[0].total_price,
      dishId: newDishId,
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const createOrder = async (req, res) => {
  try {
    const { userId, restaurantId, courierId, dishId } = req.body;
    console.log(dishId);
    const checkUser = await db.query(`SELECT user_id FROM users WHERE user_id=${userId}`);
    if (!checkUser.rowCount) throw new SyntaxError('Can`t find any user');

    const checkCourier = await db.query(`SELECT courier_id FROM courier WHERE courier_id=${courierId}`);
    if (!checkCourier.rowCount) throw new SyntaxError('Can`t find any courier');

    const dishes = await db.query('SELECT dish_id, restaurant_id, price FROM dishes WHERE dish_id=ANY($1::int[])', [dishId]);
    if (!dishes.rows.length) throw new SyntaxError('Can`t find any dish');

    const data = dishes.rows;
    let totalPrice = 0;
    data.forEach((elemet) => {
      if (data[0].restaurant_id !== restaurantId) throw new SyntaxError('You can`t order in many restaurant');
      totalPrice += +elemet.price.replace('$', '');
    //   console.log(parseFloat(elemet.price.replace('$', '')));
    });

    const d = await db.query(`INSERT INTO orders (user_id, restaurant_id, courier_id, total_price)
                  VALUES ($1, $2, $3, $4) RETURNING order_id`, [userId, restaurantId, courierId, totalPrice]);
    if (!d.rowCount) throw new SyntaxError('Something went wrong');
    console.log(d.rows[0].order_id);
    for (i in dishId) {
      db.query('INSERT INTO order_dish(order_id, dish_id) values($1, $2)', [d.rows[0].order_id, dishId[i]], (err) => {
        if (err) throw new SyntaxError('Something went wrong');
      });
}

    res.status(200).json('Order created');
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const deleted = await db.query(`DELETE FROM orders WHERE order_id=${id}`);
    if (!deleted.rowCount) throw new SyntaxError('Can`t find a order');

    // await db.query(`DELETE FROM order_dish WHERE order_id=${ id }`);
    res.status(200).json('Order deleted');
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
