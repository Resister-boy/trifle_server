const opponentCtrl = require('../controllers/opponentCtrl');
const router = require('express').Router();

router.route('/').get(opponentCtrl.getOpponent);

module.exports = router;