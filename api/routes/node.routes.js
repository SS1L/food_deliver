const router = require('express').Router();
const controllers = require('../controllers/node.controllets');

router.get('/', controllers.hello);

module.exports = router;
