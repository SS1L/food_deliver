const db = require('../db/database');

const hello = async (req, res) => {
  try {
    const data = await db.query('SELECT * FROM restaurants');
    res.json(data);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  hello,
};
