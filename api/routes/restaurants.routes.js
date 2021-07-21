const router = require('express').Router();
const { check } = require('express-validator');
const validation = require('../middleware/validation');
const { restaurantValidation } = require('../validation/restaurant.validation');
const restaurants = require('../controllers/restaurants.controller');

router.get(
  '/restaurant',
  [
    check('cousine')
      .isString()
      .withMessage('Cousine must be string'),
  ],
  validation,
  restaurants.getRestaurants,
);
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
