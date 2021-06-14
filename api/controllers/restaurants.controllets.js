const db = require('../db/database');

const getRestaurants = async (req, res) => {
  try {
    const data = await db.query('SELECT * FROM restaurants');
    res.json(data.rows);
  } catch (e) {
    console.log(e);
  }
};

const getRestaurantsCuisine = async (req, res) => {
  try {
    const { cuisine } = req.body;
    console.log(`SELECT * FROM restaurants WHERE cuisine=${cuisine}`);
    const data = await db.query(`SELECT * FROM restaurants WHERE cuisine='${cuisine}'`);
    res.json(data.rows);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getRestaurants,
  getRestaurantsCuisine,
};
