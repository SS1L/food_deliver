/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
const bcrypt = require('bcrypt');
const Users = require('../models/users.model');
const destroyUser = require('../services/destoryUser');
require('dotenv').config();

const getUsers = async (req, res) => {
  try {
    const allUsers = await Users.findAll({ includes: { all: true } });

    res.status(200).json({ data: allUsers });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Users.findByPk(id);
    if (!user) throw new SyntaxError("Can't find any user");

    res.status(200).json({ data: user });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const createUser = async (req, res) => {
  const { name, surname, address, userPhone, email, password } = req.body;
  try {
    const newUser = await Users.create({
      name,
      surname,
      address,
      user_phone: userPhone,
      email,
      password: await bcrypt.hash(password, parseInt(process.env.SALT, 10))
    }, { fields: ['name', 'surname', 'address', 'user_phone', 'email', 'password'] });

    res.status(200).json({ message: 'User created', data: newUser });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, surname, address, userPhone } = req.body;
  try {
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
  const { id } = req.params;
  try {
    const user = await Users.findByPk(id);
    if (!user) throw new SyntaxError("Can't find this user");
    await destroyUser(id);
    await Users.destroy({ where: { id } });

    res.status(200).json({ message: 'User deleted' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
