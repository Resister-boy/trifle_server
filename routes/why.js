const whyCtrl = require('../controllers/whyCtrl');
const router = require('express').Router();

router.route('/').get(whyCtrl.getWhy);

module.exports = router;