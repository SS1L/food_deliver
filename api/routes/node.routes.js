const router = require('express').Router();
const restaurants = require('../controllers/restaurants.controller');

router.get('/restaurants', restaurants.getRestaurants);
router.get('/restaurantsCousine', restaurants.getRestaurantsCuisine);
// router.get('/restaurantName/:id', restaurants.getRestaurantById);
router.post('/createRestuarnat', restaurants.createNewRestaurant);
// router.put('/updateRestaurant/:id', restaurants.updateRestaurant);
router.delete('/deleteRestaurant/:id', restaurants.deleteRestaurant);

module.exports = router;
