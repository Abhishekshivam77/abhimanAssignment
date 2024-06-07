const express = require('express');
const { createRoom, joinRoom } = require('../controllers/chatroomController');
const router = express.Router();

router.post('/api/chatrooms', createRoom);
router.post('/api/joinroom', joinRoom);

module.exports = router;
