const Users = require('../models/users.model');

const getUsers = async (req, res) => {
  try {
    const allUsers = await Users.findAll();

    res.status(200).json({ data: allUsers });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, surname, address, userPhone } = req.body;

    const newUser = await Users.create({
      name, surname, address, user_phone: userPhone
    }, { fields: ['name', 'surname', 'address', 'user_phone'] });

    res.status(200).json({ message: 'User created', data: newUser });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, surname, address, userPhone } = req.body;
    const user = await Users.update({
      name, surname, address, user_phone: userPhone 
    }, { where: { id } });
    if (user[0] === 0) throw new SyntaxError("Can't find this user");

    res.status(200).json({ message: 'User updated' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.destroy({ where: { id } });
    if (!user) throw new SyntaxError("Can't find this user");

    res.status(200).json({ message: 'User deleted' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
