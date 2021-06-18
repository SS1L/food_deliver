const router = require('express').Router();
const dish = require('../controllers/dishes.controller');

router.get('/dishes', dish.getDishes);
router.get('/dishes/:id', dish.getDishesId);
router.post('/dishes', dish.createDish);
router.put('/dishes/:id', dish.updateDish);
router.delete('/dishes/:id', dish.deleteDish);

module.exports = router;
