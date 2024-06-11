const express = require('express');
const { getProfile, sendFriendRequest } = require('../controller/usercontroller');
const UserRouter = express.Router();

UserRouter.get('/api/profile/:userId', getProfile);
UserRouter.post('/api/friend-requests', sendFriendRequest);

module.exports = UserRouter;
