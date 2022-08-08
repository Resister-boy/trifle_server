const howCtrl = require('../controllers/howCtrl');
const router = require('express').Router();

router.route('/').get(howCtrl.getHow);

module.exports = router;