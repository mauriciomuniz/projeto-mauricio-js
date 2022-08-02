const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController')
const loginController = require('./src/controllers/loginController')
//const pagina = require('./src/controllers/pagina')


//rota da pagina inicial
route.get('/', homeController.index);
route.post('/', homeController.recebeInicial);

//rota de outra pagina
//  route.get('/pagina', pagina.paginaInicial);

route.get('/login/index', loginController.index);


module.exports = route;