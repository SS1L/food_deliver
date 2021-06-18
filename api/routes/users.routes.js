const { route } = require('./restaurants.routes');

const router = require('express').Router();

router.post('/user');
router.post('/user/:id');
router.delete('/user/:id');

module.exports = router;
