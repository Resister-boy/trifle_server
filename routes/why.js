const whyCtrl = require('../controllers/whyCtrl');
const router = require('express').Router();

router.route('/').post(whyCtrl.getWhy);

module.exports = router;