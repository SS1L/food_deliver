const router = require('express').Router();
const user = require('../controllers/user.controller');

router.get('/user', user.getUsers);
router.post('/user', user.createUser);
router.post('/user/:id');
router.delete('/user/:id');

module.exports = router;
