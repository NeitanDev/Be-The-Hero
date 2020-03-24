const express = require('express');
const OngsController = require('./controllers/OngsController');

const routes = express.Router();

/**Rotas da aplicação:  */
routes.post('/ongs', OngsController.create);
routes.get('/ongs', OngsController.index);

module.exports = routes;