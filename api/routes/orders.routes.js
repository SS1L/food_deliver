const router = require('express').Router();
const validation = require('../middleware/validation');
const { orderValidation } = require('../validation/order.validation');
const order = require('../controllers/order.controller');
const checkOrderCourier = require('../middleware/courier');

router.get('/order', order.getOrders);
router.get('/order/:id', order.getOrderId);
router.get('/availableOrder', order.getAvailableOrder);
router.post(
  '/order',
  orderValidation(),
  validation,
  order.createOrder,
);
router.put('/order/:id', order.confirmOrder);
router.put('/deliverOrder/:id', checkOrderCourier, order.deliveredOrder);
router.delete('/order/:id', order.deleteOrder);

module.exports = router;
