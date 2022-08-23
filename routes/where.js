const whereCtrl = require('../controllers/whereCtrl');
const router = require('express').Router();

router.route('/').post(whereCtrl.getWhere);

module.exports = router;