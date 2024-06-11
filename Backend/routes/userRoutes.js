const express = require('express');
const {register, login, getProfile, sendFriendRequest } = require('../controller/usercontroller');

const UserRouter = express.Router();


UserRouter.post('/api/register', register);
UserRouter.post('/api/login', login);
UserRouter.get('/api/profile/:userId', getProfile);
UserRouter.post('/api/friend-requests', sendFriendRequest);

module.exports = UserRouter;
