const opponentCtrl = require('../controllers/opponentCtrl');
const router = require('express').Router();

router.route('/').post(opponentCtrl.getOpponent);

module.exports = router;