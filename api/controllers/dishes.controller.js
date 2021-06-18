const db = require('../db/database');

const getDishes = async (req, res) => {
  try {
    const allDishes = await db.query('SELECT * FROM dishes');
    if (!allDishes.rows) throw new SyntaxError('Error');

    res.json(allDishes.rows);
  } catch (e) {
    if (e.name === 'SyntaxError') {
      res.status(500).json(e.message);
    } else {
      res.status(500).json(e);
    }
  }
};

// search by restaurant id?
const getDishesId = async (req, res) => {
  try {
    const { id } = req.params;
    res.json(id);
  } catch (e) {
    res.json(e);
  }
};

const createDish = async (req, res) => {
  try {
    const { restaurantId, name, describe, price } = req.body;
    const checkRestaurant = await db.query(`SELECT restaurant_id FROM restaurants WHERE restaurant_id=${restaurantId}`);
    if (!checkRestaurant.rowCount) throw new SyntaxError('Can`t find a restaurant');

    const newDish = await db.query(`INSERT INTO dishes (restaurant_id, name, describe, price)
                  VALUES ($1, $2, $3, $4) RETURNING name, describe, price`, [restaurantId, name, describe, price]);

    res.json(newDish.rows);
  } catch (e) {
    if (e.name === 'SyntaxError') {
      res.status(500).json(e.message);
    } else {
      res.status(500).json(e);
    }
  }
};

// const updateDish = async(req, res) => {

// };

const deleteDish = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDish = await db.query(`DELETE FROM dishes WHERE dish_id=${id} RETURNING name, describe, price`);
    if (!deletedDish.rowCount) throw new SyntaxError('Can`t find a dish');

    res.json(deletedDish.rows);
  } catch (e) {
    if (e.name === 'SyntaxError') {
      res.status(500).json(e.message);
    } else {
      res.json(e);
    }
  }
};

module.exports = {
  getDishes,
  getDishesId,
  createDish,
  deleteDish,
};
