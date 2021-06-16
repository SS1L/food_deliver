const router = require('express').Router();
const restaurants = require('../controllers/restaurants.controller');

router.get('/restaurants', restaurants.getRestaurants);
router.get('/restaurantsCousine', restaurants.getRestaurantsCuisine);
//router.get('/restaurantName', restaurants.getRestaurantById);
router.post('/createRestuarnat', restaurants.createNewRestaurant);

module.exports = router;
