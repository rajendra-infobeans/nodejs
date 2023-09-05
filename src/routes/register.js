const express = require('express');
const { register } = require('../controller/register/register.js');
const { registerValidation } = require('../middleware/JoiValidation.js');

const registerRouter = express.Router();

registerRouter.post('/', registerValidation, register);

module.exports = registerRouter;
