const router = require('express').Router();
const restaurants = require('../controllers/restaurants.controller');

router.get('/restaurant', restaurants.getRestaurants);
router.get('/restaurantsCousine', restaurants.getRestaurantsCuisine);
router.get('/restaurant/:id', restaurants.getRestaurantById);
router.post('/restaurant', restaurants.createNewRestaurant);
router.put('/restaurant/:id', restaurants.updateRestaurant);
router.delete('/restaurant/:id', restaurants.deleteRestaurant);

module.exports = router;
