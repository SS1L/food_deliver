const Order = require('../models/order.model');

const checkOrderCourier = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await Order.findByPk(id);
    if (!data) return res.status(500).json({ message: "Can't find this order" });

    if (!data.dataValues.courier_id) res.status(500).json({ message: 'Something went wrong' });
    next();
  } catch (e) {
    console.log(e);
  }
};

module.exports = checkOrderCourier;
