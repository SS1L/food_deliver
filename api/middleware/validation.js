const { validationResult } = require('express-validator');

const validation = (req, res, next) => {
  const errors = validationResult(req);
  console.log(errors);
  if (errors.isEmpty()) return next();

  const extractedErrors = [];
  errors.array().map((error) => extractedErrors.push({ [error.param]: error.msg }));
  return res.status(422).json({ error: extractedErrors });
};

module.exports = validation;
