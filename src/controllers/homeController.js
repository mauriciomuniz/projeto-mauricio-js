// const HomeModel = require('../models/HomeModel')

// HomeModel.create({
//     titulo: 'criei o meu titulo 2',
//     descricao: 'criei minha descrição 2'
// })
// .then(dados => console.log(dados))
// .catch(erro => console.log(e));

exports.paginaInicial = (req,res) =>{
    res.render('index');
};

exports.recebeInicial= (req,res)=>{
    res.send(req.body);
};

