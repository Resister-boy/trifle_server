const whereCtrl = require('../controllers/whereCtrl');
const router = require('express').Router();

router.route('/').get(whereCtrl.getWhere);

module.exports = router;