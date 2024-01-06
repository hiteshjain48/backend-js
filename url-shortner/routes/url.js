const express = require('express');
const router = express.Router();
const { handleGenerateShortURL, handleGetAnalytics, handleRedirectURL } = require('../controllers/url');

router.post('/', handleGenerateShortURL);
router.get('/analytics/:shortID', handleGetAnalytics);
router.get('/:shortID', handleRedirectURL);

module.exports = router;