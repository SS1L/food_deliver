const Restaurant = require('../models/restaurant.model');

const getRestaurants = async (req, res) => {
  try {
    const restaurantsInfo = await Restaurant.findAll();

    res.status(200).json({ data: restaurantsInfo });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const getRestaurantsCuisine = async (req, res) => {
  try {
    const { cousine } = req.body;
    const restaurantsInfo = await Restaurant.findAll({ where: { cousine } });

    res.status(200).json({ data: restaurantsInfo });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const getRestaurantById = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurantInfo = await Restaurant.findOne({ where: { id } });

    res.status(200).json({ data: restaurantInfo });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const createNewRestaurant = async (req, res) => {
  try {
    const { name, describe, address, cousine } = req.body;
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
  try {
    const { id } = req.params;
    const { name, describe, address, cousine } = req.body;

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
  try {
    const { id } = req.params;

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
