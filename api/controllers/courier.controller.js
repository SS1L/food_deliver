const db = require('../db/database');

const getCouriers = async (req, res) => {
  try {
    const couriers = await db.query('SELECT * FROM courier');
    const checkedCourier = couriers.rows;
    if (!checkedCourier) return res.status(500).json('Something went wrong');

    res.json(checkedCourier);
  } catch (e) {
    res.json({ error: e.message });
  }
};

const getCouriersId = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const courier = await db.query(`SELECT * FROM courier WHERE courier_id=${id}`);
    if (!courier.rows) return res.status(500).json('Something went wrong');

    res.json(courier.rows);
  } catch (e) {
    res.json({ error: e.message });
  }
};

const createNewCourier = async (req, res) => {
  try {
    const { name, surname, courier_phone } = req.body;
    const newCourier = await db.query(`INSERT INTO courier (name, surname, courier_phone) 
                        VALUES ($1, $2, $3) RETURNING name, surname, courier_phone`, [name, surname, courier_phone]);

    res.json(newCourier.rows);
  } catch (e) {
    res.json(e);
  }
};

module.exports = {
  getCouriers,
  getCouriersId,
  createNewCourier,
};
