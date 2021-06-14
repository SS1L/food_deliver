const router = require('express').Router();
const controllers = require('../controllers/restaurants.controllets');

router.get('/restaurants', controllers.getRestaurants);
router.get('/restaurantsCousine', controllers.getRestaurantsCuisine);

module.exports = router;
