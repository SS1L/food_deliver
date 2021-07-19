const router = require('express').Router();
const validation = require('../middleware/validation');
const { restaurantValidation } = require('../validation/restaurant.validation');
const restaurants = require('../controllers/restaurants.controller');

router.get('/restaurant', restaurants.getRestaurants);
router.get('/restaurantsCousine', restaurants.getRestaurantsCuisine);
router.get('/restaurant/:id', restaurants.getRestaurantById);
router.post(
  '/restaurant',
  restaurantValidation(),
  validation,
  restaurants.createNewRestaurant,
);
router.put(
  '/restaurant/:id',
  restaurantValidation(),
  validation,
  restaurants.updateRestaurant,
);
router.delete('/restaurant/:id', restaurants.deleteRestaurant);

module.exports = router;
