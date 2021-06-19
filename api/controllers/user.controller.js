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

const createUser = async (req, res) => {
  try {
    const { name, surname, address, userPhone, email, password} = req.body;
    res.json('all work');
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getUsers,
  createUser,
};
