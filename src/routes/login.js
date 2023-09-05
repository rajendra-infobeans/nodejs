const express = require('express');
const login = require('../controller/login/login.js');

const loginRouter = express.Router();

loginRouter.post('/', login);

module.exports = loginRouter;
