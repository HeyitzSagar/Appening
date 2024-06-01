const express = require('express');
const router = express.Router();

const {searchAnagram } = require('../controllers/searchController');

router.post('/search', searchAnagram);

module.exports = router;