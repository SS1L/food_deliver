/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
const Dish = require('../models/dishes.model');
const Order = require('../models/order.model');
const orderDishes = require('../models/orderDishes.model');
const Restaurant = require('../models/restaurant.model');

const getDishes = async (req, res) => {
  try {
    const allDishes = await Dish.findAll({ includes: { all: true } });

    res.status(200).json({ data: allDishes });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const getDishesId = async (req, res) => {
  const { id } = req.params;
  try {
    const dishes = await Dish.findByPk(id);
    if (!dishes) throw new Error("Can't find any information");

    res.status(200).json(dishes);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

const createDish = async (req, res) => {
  const { restaurantId, name, describe, price } = req.body;
  try {
    const findRestaurant = await Restaurant.findByPk(restaurantId);
    if (!findRestaurant) throw new Error("Can't find restaurant");
    const newDish = await Dish.create({
      name, describe, price, restaurant_id: restaurantId
    }, { fields: ['name', 'describe', 'price', 'restaurant_id'] });

    res.status(201).json({ data: newDish });
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

const updateDish = async (req, res) => {
  const { id } = req.params;
  const { name, describe, price } = req.body;
  try {
    const dish = await Dish.update({
      name, describe, price
    }, { where: { id } });
    if (dish[0] === 0) throw new Error("Can't find any dish");

    res.status(200).json({ message: 'Dishes update' });
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

const deleteDish = async (req, res) => {
  const { id } = req.params;
  try {
    const ordered = await orderDishes.findAll({ where: { dish_id: id } });
    Promise.all(ordered.map(async (dishId) => {
      await orderDishes.destroy({ where: { dish_id: dishId.dataValues.dish_id } });
      await Order.destroy({ where: { id: dishId.dataValues.order_id } });
    }));

    const dish = await Dish.destroy({ where: { id } });
    if (!dish) throw new Error("Can't find any dish");

    res.status(200).json({ message: 'Dish deleted' });
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

module.exports = {
  getDishes,
  getDishesId,
  createDish,
  updateDish,
  deleteDish,
};
