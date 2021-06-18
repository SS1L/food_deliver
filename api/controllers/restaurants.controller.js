const db = require('../db/database');

const getRestaurants = async (req, res) => {
  try {
    // change select
    const restaurantsInfo = await db.query('SELECT * FROM restaurants');
    if (!restaurantsInfo.rows) throw new SyntaxError('error');

    res.status(200).json(restaurantsInfo.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const getRestaurantsCuisine = async (req, res) => {
  try {
    const { cuisine } = req.body;
    // rename
    const restaurantsInfo = await db.query(`SELECT * FROM restaurants WHERE cuisine='${cuisine}'`);
    if (!restaurantsInfo.rows) throw new SyntaxError('Can`t find type any restaurnats');

    // const getRestaurantsInfo = restaurantsInfo.rows;
    res.status(200).json(restaurantsInfo.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const getRestaurantById = async (req, res) => {
  try {
    const { id } = req.params;
    // need fix
    const restaurantInfo = await db.query(`SELECT * FROM restaurants WHERE restaurant_id=${id}`);
    if (!restaurantInfo.rowCount) throw new SyntaxError('Can`t find a restaurant');

    res.status(200).json(restaurantInfo.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const createNewRestaurant = async (req, res) => {
  try {
    const { name, describe, address, cuisine } = req.body;
    const newRestaurant = await db.query(`INSERT INTO restaurants (name, describe, address, cuisine) 
                        VALUES ($1, $2, $3, $4) RETURNING name, describe, address, cuisine`, [name, describe, address, cuisine]);

    res.status(200).json(newRestaurant.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const updateRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, describe, address, cuisine } = req.body;

    // const findRestaurant = await db.query(`SELECT `)
    // need fix
    await db.query('UPDATE restaurants SET name=$1, describe = $2, address = $3, cuisine = $4 WHERE restaurant_id=$5', [name, describe, address, cuisine, id]);

    res.status(200).json('Restaurant changed');
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const deleteRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.query(`DELETE FROM restaurants WHERE restaurant_id=${id} RETURNING name, describe, address, cuisine`);
    if (!result.rowCount) throw new SyntaxError('Can`t find restaurant');

    res.status(200).json(result.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
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
