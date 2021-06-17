const router = require('express').Router();

router.get('/order');
router.get('/order/:id');
router.post('/order');
router.delete('/order');

module.exports = router;
