const router = require('express').Router();
const { check } = require('express-validator');
const validation = require('../middleware/validation');
const { orderValidation } = require('../validation/order.validation');
const order = require('../controllers/order.controller');

router.get('/order', order.getOrders);
router.get('/order/:id', order.getOrderId);
router.get('/availableOrder', order.getAvailableOrder);
router.post(
  '/order',
  orderValidation(),
  validation,
  order.createOrder,
);
router.put(
  '/order/:id',
  [
    check('courierId')
      .notEmpty()
      .withMessage('courierId is required')
      .isInt()
      .withMessage('courierId must be integer'),
  ],
  validation,
  order.confirmOrder,
);
router.delete('/order/:id', order.deleteOrder);

module.exports = router;
