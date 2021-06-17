const router = require('express').Router();
const couriers = require('../controllers/courier.controller');

router.get('/courier', couriers.getCouriers);
router.get('/courier/:id', couriers.getCouriersId);
router.post('/courier', couriers.createNewCourier);
router.put('/courier');
router.delete('/courier/:id');

module.exports = router;
