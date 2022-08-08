const genreCtrl = require('../controllers/genreCtrl');
const router = require('express').Router();

router.route('/').get(genreCtrl.getGenre);

module.exports = router;