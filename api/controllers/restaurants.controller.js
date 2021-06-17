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

    const restaurantsCuisine = restaurantsInfo?.rows;
    if (!restaurantsCuisine) throw new SyntaxError('Can`t find data');
    // const getRestaurantsInfo = restaurantsInfo.rows;
    res.status(200).json(restaurantsCuisine);
  } catch (e) {
    if (e.name === 'SyntaxError') {
      res.status(400).json(e.message);
    } else {
      res.status(400).json(e);
    }
  }
};

const getRestaurantById = async (req, res) => {
  try {
    const { id } = req.params;
    // need fix
    const restaurantInfo = await db.query(`SELECT * FROM restaurants WHERE restaurant_id=${id}`);
    if (!restaurantInfo.rowCount) return res.status(500).json('Can`t find a restaurant');

    res.json(restaurantInfo.rows);
  } catch (e) {
    res.json(e);
  }
};

const createNewRestaurant = async (req, res) => {
  try {
    const { name, describe, address, cuisine } = req.body;
    const newRestaurant = await db.query(`INSERT INTO restaurants (name, describe, address, cuisine) 
                        VALUES ($1, $2, $3, $4) RETURNING name, describe, address, cuisine`, [name, describe, address, cuisine]);

    res.json(newRestaurant.rows);
  } catch (e) {
    res.status(500).json(e);
  }
};

const updateRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, describe, address, cuisine } = req.body;

    // const findRestaurant = await db.query(`SELECT `)
    // need fix
    await db.query('UPDATE restaurants SET name=$1, describe = $2, address = $3, cuisine = $4 WHERE restaurant_id=$5', [name, describe, address, cuisine, id]);

    res.json('Restaurant changed');
  } catch (e) {
    res.status(500).json(e.message);
  }
};

const deleteRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.query(`DELETE FROM restaurants WHERE restaurant_id=${id} RETURNING name, describe, address, cuisine`);
    if (!result.rowCount) throw new SyntaxError('Can`t find restaurant');

    res.json(result.rows);
  } catch (e) {
    if (e.name === 'SyntaxError') {
      res.json(e.message);
    } else {
      res.json(e);
    }
  }
};

module.exports = {
  getRestaurants,
  getRestaurantsCuisine,
  getRestaurantById,
  createNewRestaurant,
  updateRestaurant,
  deleteRestaurant,
};
