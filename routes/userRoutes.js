const express = require('express');
const router = express.Router();

const {listUsers, changeUserType} = require('../controllers/userController');
const {authenticateToken, authorizeAdmin} = require('../middlewares/authMiddleware');

router.get('/', authenticateToken, authorizeAdmin, listUsers);

// if you want to use the administrator admin role, then you can uncomment this code..

// router.put('/changeusertype', authenticateToken, authorizeAdmin, changeUserType);   

module.exports = router;