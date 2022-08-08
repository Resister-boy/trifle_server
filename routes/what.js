const whatCtrl = require('../controllers/whatCtrl');
const router = require('express').Router();

router.route('/').get(whatCtrl.getWhat);

module.exports = router;