const express = require('express');
const router = express.Router();

router.use('/videos', require('./videos'));
router.use('/scraper', require('./scraper'))
module.exports = router;

