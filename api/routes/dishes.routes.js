const router = require('express').Router();

router.get('/dishes');
router.get('/dishes/:id');
router.post('/dishes');
router.put('/dishes/:id');
router.delete('/dishes/:id');

module.exports = router;
