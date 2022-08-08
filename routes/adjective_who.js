const adjective_whoCtrl = require('../controllers/adjective_whoCtrl');
const router = require('express').Router();

router.route('/').get(adjective_whoCtrl.getAdjectvie_who);

module.exports = router;