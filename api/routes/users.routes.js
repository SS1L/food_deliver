const router = require('express').Router();
const user = require('../controllers/user.controller');

router.get('/user', user.getUsers);
router.post('/user', user.createUser);
router.put('/user/:id');
router.delete('/user/:id', user.deleteUser);

module.exports = router;
