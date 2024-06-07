const express = require('express');
const { sendMessage } = require('../controllers/messageController');
const router = express.Router();

router.post('/api/messages', sendMessage);

module.exports = router;
