const db = require('../db/database');

const getDishes = async (req, res) => {
  try {
    const allDishes = await db.query('SELECT * FROM dishes');
    if (!allDishes.rows) throw new SyntaxError('Error');

    res.status(200).json(allDishes.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// search by restaurant id?
const getDishesId = async (req, res) => {
  try {
    const { id } = req.params;
    const dishes = await db.query(`SELECT name, describe, price FROM dishes WHERE restaurant_id=${id}`);
    if (!dishes.rowCount) throw new SyntaxError('Someting went wrong');

    res.status(200).json(dishes.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const createDish = async (req, res) => {
  try {
    const { restaurantId, name, describe, price } = req.body;
    const checkRestaurant = await db.query(`SELECT restaurant_id FROM restaurants WHERE restaurant_id=${restaurantId}`);
    if (!checkRestaurant.rowCount) throw new SyntaxError('Can`t find a restaurant');

    const newDish = await db.query(`INSERT INTO dishes (restaurant_id, name, describe, price)
                  VALUES ($1, $2, $3, $4) RETURNING name, describe, price`, [restaurantId, name, describe, price]);

    res.status(200).json(newDish.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const updateDish = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, describe, price } = req.body;

    await db.query('UPDATE dishes SET name=$1, describe=$2, price=$3 WHERE dish_id=$4', [name, describe, price, id]);
    res.status(200).json('Dish change');
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const deleteDish = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDish = await db.query(`DELETE FROM dishes WHERE dish_id=${id} RETURNING name, describe, price`);
    if (!deletedDish.rowCount) throw new SyntaxError('Can`t find a dish');

    res.status(200).json(deletedDish.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports = {
  getDishes,
  getDishesId,
  createDish,
  updateDish,
  deleteDish,
};
