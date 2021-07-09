const router = require('express').Router();
const order = require('../controllers/order.controller');

router.get('/order', order.getOrders);
router.get('/order/:id', order.getOrderId);
router.get('/availableOrder', order.getAvailableOrder);
router.post('/order', order.createOrder);
router.put('/order/:id', order.confirmOrder);
router.delete('/order/:id', order.deleteOrder);

module.exports = router;
