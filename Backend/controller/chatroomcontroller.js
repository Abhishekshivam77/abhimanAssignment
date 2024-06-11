const { Room } = require('../model/chatroom');
const { User } = require('../model/user');

exports.createRoom = async (req, res) => {
  const { name, id, pass } = req.body;
  try {
    const room = await Room.create({ roomId: id, creator: id });
    res.status(201).json(room);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.joinRoom = async (req, res) => {
  const { id, pass } = req.body;
  try {
    const room = await Room.findByPk(id);
    if (room) {
      room.users.push(id);
      await room.save();
      res.status(200).json(room);
    } else {
      res.status(404).json({ error: 'Room not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
