const routes = require('express').Router();

const baseController = require('../Controllers');

routes.get('/', baseController.getName);

module.exports = routes;
//