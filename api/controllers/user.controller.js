const db = require('../db/database');

const getUsers = async (req, res) => {
  try {
    const allUsers = await db.query('SELECT user_id, name, surname, address, user_phone FROM users');
    if (!allUsers.rowCount) throw new SyntaxError('Something went wrong');

    res.status(200).json(allUsers.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// email, password
const createUser = async (req, res) => {
  try {
    const { name, surname, address, userPhone } = req.body;

    await db.query(`INSERT INTO users (name, surname, address, user_phone)
                    VALUES ($1, $2, $3, $4)`, [name, surname, address, userPhone]);

    res.status(200).json({ message: 'User created' });
  } catch (e) {
    res.json({ error: e });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await db.query(`DELETE FROM users WHERE user_id=${id}`);
    if (!user.rowCount) throw new SyntaxError('Can`t find a user');

    res.status(200).json({ message: 'User deleted' });
  } catch (e) {
    res.json({ error: e.message });
  }
};

module.exports = {
  getUsers,
  createUser,
  deleteUser,
};
