/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
const Restaurant = require('../models/restaurant.model');

const getRestaurants = async (req, res) => {
  try {
    const restaurantsInfo = await Restaurant.findAll({ include: { all: true } });

    res.status(200).json({ data: restaurantsInfo });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const getRestaurantsCuisine = async (req, res) => {
  const { cousine } = req.body;
  try {
    const restaurantsInfo = await Restaurant.findAll({ where: { cousine } });

    res.status(200).json({ data: restaurantsInfo });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const getRestaurantById = async (req, res) => {
  const { id } = req.params;
  try {
    const restaurantInfo = await Restaurant.findByPk(id);
    if (!restaurantInfo) throw new SyntaxError("Can't find any restaurant");

    res.status(200).json({ data: restaurantInfo });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const createNewRestaurant = async (req, res) => {
  const { name, describe, address, cousine } = req.body;
  try {
    const newRestaurant = await Restaurant.create({
      name, describe, address, cousine
    },
    { fields: ['name', 'describe', 'address', 'cousine'] });

    res.status(200).json({ message: 'New restaurant created', data: newRestaurant });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const updateRestaurant = async (req, res) => {
  const { id } = req.params;
  const { name, describe, address, cousine } = req.body;
  try {
    const restaurant = await Restaurant.update({
      name, describe, address, cousine
    },
    { where: { id } });
    if (restaurant[0] === 0) throw new SyntaxError("Can't find this id");

    res.status(200).json({ message: 'Restaurant updated' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const deleteRestaurant = async (req, res) => {
  const { id } = req.params;
  try {
    const restaurant = await Restaurant.destroy({ where: { id } });
    if (!restaurant) throw new SyntaxError("Can't delete this restaurant");

    res.status(200).json({ message: 'Restaurant deleted' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports = {
  getRestaurants,
  getRestaurantsCuisine,
  getRestaurantById,
  createNewRestaurant,
  updateRestaurant,
  deleteRestaurant,
};
