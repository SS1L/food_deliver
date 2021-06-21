const router = require('express').Router();
const order = require('../controllers/order.controller');

router.get('/order', order.getOrders);
router.get('/order/:id');
router.post('/order');
router.delete('/order');

module.exports = router;
