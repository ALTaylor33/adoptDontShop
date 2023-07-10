const router = require('express').Router();
const searchResults = require('./searchResults.js');

router.use('/search', searchResults);

module.exports = router;
