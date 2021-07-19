const router = require('express').Router();
const validation = require('../middleware/validation');
const { dishValidation } = require('../validation/dishe.validation');
const dish = require('../controllers/dishes.controller');

router.get('/dishes', dish.getDishes);
router.get('/dishes/:id', dish.getDishesId);
router.post(
  '/dishes',
  dishValidation(),
  validation,
  dish.createDish,
);
router.put(
  '/dishes/:id',
  dishValidation(),
  validation,
  dish.updateDish,
);
router.delete('/dishes/:id', dish.deleteDish);

module.exports = router;
