/* eslint-disable arrow-body-style */
const { check } = require('express-validator');

exports.restaurantValidation = () => {
  return [
    check('name')
      .notEmpty()
      .withMessage('Name is required')
      .isString()
      .withMessage('Name must be string'),
    check('describe')
      .notEmpty()
      .withMessage('Describe is required')
      .isString()
      .withMessage('Describe must be string'),
    check('address')
      .notEmpty()
      .withMessage('Address is required')
      .isString()
      .withMessage('Address must be string'),
    check('cousine')
      .notEmpty()
      .withMessage('Cousine is required')
      .isString()
      .withMessage('Cousine must be string'),
  ];
};
