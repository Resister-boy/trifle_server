const adjective_whoCtrl = require('../controllers/adjective_whoCtrl');
const router = require('express').Router();

router.route('/').post(adjective_whoCtrl.getAdjectvie_who);

module.exports = router;