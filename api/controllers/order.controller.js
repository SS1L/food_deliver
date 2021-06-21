const db = require('../db/database');

const getOrders = async (req, res) => {
  try {
    res.json('all work');
  } catch (e) {
    res.json(e);
  }
};

module.exports = {
  getOrders,
};
