const router = require('express').Router();
const { courierValidation } = require('../validation/courier.validation');
const validation = require('../middleware/validation');
const couriers = require('../controllers/courier.controller');

router.get('/courier', couriers.getCouriers);
router.get('/courier/:id', couriers.getCouriersId);
router.post(
  '/courier',
  courierValidation(),
  validation,
  couriers.createNewCourier,
);
router.put('/courier/:id',
  courierValidation(),
  validation,
  couriers.updateCourier);
router.delete('/courier/:id', couriers.deleteCourier);

module.exports = router;
