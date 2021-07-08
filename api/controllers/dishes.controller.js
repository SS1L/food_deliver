/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
const Dish = require('../models/dishes.model');
const Restaurant = require('../models/restaurant.model');

const getDishes = async (req, res) => {
  try {
    const allDishes = await Dish.findAll({ includes: { all: true } });

    res.status(200).json({ data: allDishes });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// search by restaurant id?
const getDishesId = async (req, res) => {
  try {
    const { id } = req.params;
    const dishes = await Dish.findByPk(id);
    if (!dishes.length) throw new SyntaxError("Can't find any information");

    res.status(200).json(dishes);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// need fix
const createDish = async (req, res) => {
  try {
    const { restaurantId, name, describe, price } = req.body;
    const findRestaurant = await Restaurant.findByPk(restaurantId);
    if (!findRestaurant) throw new SyntaxError("Can't find restaurant");
    const newDish = await Dish.create({
      name, describe, price, restaurant_id: restaurantId
    }, { fields: ['name', 'describe', 'price', 'restaurant_id'] });

    res.status(200).json({ data: newDish });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const updateDish = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, describe, price } = req.body;
    const dish = await Dish.update({
      name, describe, price
    }, { where: { id } });
    if (dish[0] === 0) throw new SyntaxError("Can't find any dish");

    res.status(200).json({ data: dish });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const deleteDish = async (req, res) => {
  try {
    const { id } = req.params;
    const dish = Dish.destroy({ where: { id } });
    if (!dish) throw new SyntaxError("Can't find any dish");

    res.status(200).json({ message: 'Dish deleted' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports = {
  getDishes,
  getDishesId,
  createDish,
  updateDish,
  deleteDish,
};
