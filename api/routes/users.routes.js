const router = require('express').Router();
const validation = require('../middleware/validation');
const { userValidation } = require('../validation/user.validation');
const user = require('../controllers/user.controller');

router.get('/user', user.getUsers);
router.get('/user/:id', user.getUserById);
router.post(
  '/user',
  userValidation(),
  validation,
  user.createUser,
);
router.put(
  '/user/:id',
  userValidation(),
  validation,
  user.updateUser,
);
router.delete('/user/:id', user.deleteUser);

module.exports = router;
