/* eslint-disable arrow-body-style */
const { check } = require('express-validator');

exports.userValidation = () => {
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
    check('address')
      .notEmpty()
      .withMessage('Address is required')
      .isString()
      .withMessage('Address must be string'),
    check('userPhone')
      .isString()
      .isLength({ min: 10, max: 10 }),
    check('email')
      .notEmpty()
      .withMessage('Email is required')
      .isEmail(),
    check('password')
      .isLength({ min: 8 })
      .withMessage('Min length 8 '),
  ];
};
