const express = require('express');
const routes = express.Router();

//const baseController = require('../Controllers/index');
//routes.get('/', baseController.getName);
routes.use('/', require('./swagger'));
routes.use('/contacts', require('./contacts'));

module.exports = routes;
