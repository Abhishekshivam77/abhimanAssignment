const express = require('express');
const { getProfile, sendFriendRequest } = require('../controllers/userController');
const router = express.Router();

router.get('/api/profile/:userId', getProfile);
router.post('/api/friend-requests', sendFriendRequest);

module.exports = router;
