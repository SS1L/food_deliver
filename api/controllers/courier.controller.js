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
    const { name, surname, courierPhone } = req.body;
    const newCourier = await db.query(`INSERT INTO courier (name, surname, courier_phone) 
                        VALUES ($1, $2, $3) RETURNING name, surname, courier_phone`, [name, surname, courierPhone]);

    res.json(newCourier.rows);
  } catch (e) {
    res.json(e);
  }
};

const updateCourier = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, surname, courierPhone } = req.body;

    const newCourier = await db.query('UPDATE courier SET name=$1, surname=$2, courier_phone=$3 WHERE courier_id=$4', [name, surname, courierPhone, id]);
    if (!newCourier.rowCount) throw new SyntaxError('Can`t find a courier');

    res.json('Courier update');
  } catch (e) {
    if (e.name === 'SyntaxError') {
      res.status(500).json(e.message);
    } else {
      res.json(e);
    }
  }
};

const deleteCourier = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCourier = await db.query(`DELETE FROM courier WHERE courier_id=${id} RETURNING name, surname, courier_phone`);
    if (!deletedCourier.rowCount) throw new SyntaxError('Can`t find a courier');

    res.status(200).json(deletedCourier.rows);
  } catch (e) {
    if (e.name === 'SyntaxError') {
      res.status(500).json(e.message);
    } else {
      res.status(500).json(e.message);
    }
  }
};

module.exports = {
  getCouriers,
  getCouriersId,
  createNewCourier,
  updateCourier,
  deleteCourier,
};
