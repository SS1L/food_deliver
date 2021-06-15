const router = require('express').Router();
const restaurants = require('../controllers/restaurants.controllets');

router.get('/restaurants', restaurants.getRestaurants);
router.get('/restaurantsCousine', restaurants.getRestaurantsCuisine);

module.exports = router;
