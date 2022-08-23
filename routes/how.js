const howCtrl = require('../controllers/howCtrl');
const router = require('express').Router();

router.route('/').post(howCtrl.getHow);

module.exports = router;