/* eslint-disable arrow-body-style */
const { check } = require('express-validator');

exports.courierValidation = () => {
  return [
    check('name')
      .notEmpty()
      .withMessage('Name is required')
      .isString()
      .withMessage('Name must be string'),
    check('surname')
      .notEmpty()
      .withMessage('Surname is required')
      .isString()
      .withMessage('Surname must be string'),
    check('courierPhone')
      .isString()
      .isLength({ min: 10, max: 10 }),
  ];
};
