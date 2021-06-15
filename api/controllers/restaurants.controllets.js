const db = require('../db/database');

const getRestaurants = async (req, res) => {
  try {
    // change select
    const restaurantsInfo = await db.query('SELECT * FROM restaurants');
    if (!restaurantsInfo.rows) throw new SyntaxError('error');

    const checkedRestaurants = restaurantsInfo?.rows;
    if (!checkedRestaurants) throw new SyntaxError('Can`t find results');

    const sendRestauratns = [];
    checkedRestaurants.forEach((item) => {
      delete item.restaurant_id;
      sendRestauratns.push(item);
    });

    res.status(200).json(sendRestauratns);
  } catch (e) {
    if (e.name === 'SyntaxError') {
      res.status(400).json(e.message);
    } else {
      res.satuts(400).json(e);
    }
  }
};

const getRestaurantsCuisine = async (req, res) => {
  try {
    const { cuisine } = req.body;
    // rename
    const restaurantsInfo = await db.query(`SELECT * FROM restaurants WHERE cuisine='${cuisine}'`);
    if (!restaurantsInfo.rows) throw new SyntaxError('Can`t find type any restaurnats');

    // const getRestaurantsInfo = restaurantsInfo.rows;
    res.json(restaurantsInfo.rows);
  } catch (e) {
    if (e.name === 'SyntaxError') {
      res.status(400).json(e.message);
    } else {
      res.status(400).json(e);
    }
  }
};

module.exports = {
  getRestaurants,
  getRestaurantsCuisine,
};
