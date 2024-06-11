const express = require('express');
const { createRoom, joinRoom } = require("../controller/chatroomcontroller");
const chatRoomRouter = express.Router();

chatRoomRouter.post('/api/chatrooms', createRoom);
chatRoomRouter.post('/api/joinroom', joinRoom);

module.exports = chatRoomRouter;
