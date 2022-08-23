const adjective_opponent = require('../controllers/adjective_opponentCtrl');
const router = require('express').Router();

router.route('/').post(adjective_opponent.getAdjective_opponent);

module.exports = router;