/* eslint-disable arrow-body-style */
const { check } = require('express-validator');

exports.orderValidation = () => {
  return [
    check('userId')
      .notEmpty()
      .withMessage('userId is required')
      .isInt()
      .withMessage('userId must be integer'),
    check('restaurantId')
      .notEmpty()
      .withMessage('restaurantId is required')
      .isInt()
      .withMessage('restaurantId must be integer'),
    check('dishId')
      .notEmpty()
      .withMessage('dishId is required')
      .isArray()
      .withMessage('Address must be array'),
  ];
};
