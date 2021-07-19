/* eslint-disable arrow-body-style */
const { check } = require('express-validator');

exports.dishValidation = () => {
  return [
    check('restaurantId')
      .notEmpty()
      .withMessage('restaurantId is required')
      .isInt()
      .withMessage('restaurantId must be number'),
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
    check('price')
      .notEmpty()
      .withMessage('Price is required')
      .isFloat()
      .withMessage('Price must be number'),
  ];
};
