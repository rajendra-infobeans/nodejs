const schemas = require('../schemas/joiSchemas.js');

exports.registerValidation = (req, res, next) => {
  const isValid = schemas.registerSchema.validate(req.body);

  if (isValid.error) {
    console.error(isValid.error.details);
    res.status(400).json({ message: isValid.error.message });
  } else {
    console.log('Data is valid');
    next();
  }
};
