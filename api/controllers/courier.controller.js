/* eslint-disable comma-dangle */
const Couriers = require('../models/couriers.model');

const getCouriers = async (req, res) => {
  try {
    const couriers = await Couriers.findAll({ includes: { all: true } });

    res.status(200).json({ data: couriers });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const getCouriersId = async (req, res) => {
  const { id } = req.params;
  try {
    const courier = await Couriers.findOne({ where: { id } });
    if (!courier) throw new Error("Can't find this courier");

    res.status(200).json({ data: courier });
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

const createNewCourier = async (req, res) => {
  const { name, surname, courierPhone } = req.body;
  try {
    const newCourier = await Couriers.create({
      name, surname, courier_phone: courierPhone
    }, { fields: ['name', 'surname', 'courier_phone'] });

    res.status(201).json({ message: 'New courier created', data: newCourier });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const updateCourier = async (req, res) => {
  const { id } = req.params;
  const { name, surname, courierPhone } = req.body;
  try {
    const changeCourier = await Couriers.update({
      name, surname, courier_phone: courierPhone
    }, { where: { id } });
    if (changeCourier[0] === 0) throw new Error("Can't find this courier ");

    res.status(200).json({ message: 'Courier updated' });
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

const deleteCourier = async (req, res) => {
  const { id } = req.params;
  try {
    const courier = await Couriers.destroy({ where: { id } });
    if (!courier) throw new Error("Can't find this courier");

    res.status(200).json({ message: 'Courier deleted' });
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

module.exports = {
  getCouriers,
  getCouriersId,
  createNewCourier,
  updateCourier,
  deleteCourier,
};
