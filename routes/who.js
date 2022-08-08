const whoCtrl = require('../controllers/whoCtrl');
const router = require('express').Router();

router.route('/').get(whoCtrl.getWho)

module.exports  = router