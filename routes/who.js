const whoCtrl = require('../controllers/whoCtrl');
const router = require('express').Router();

router.route('/').post(whoCtrl.getWho)

module.exports  = router