const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController')
const pagina = require('./src/controllers/pagina')


//rota da pagina inicial
route.get('/', homeController.paginaInicial);
route.post('/', homeController.recebeInicial);

//rota de outra pagina
route.get('/pagina', pagina.paginaInicial);


module.exports = route;