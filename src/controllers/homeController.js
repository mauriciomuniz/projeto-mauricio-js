// const HomeModel = require('../models/HomeModel')

// HomeModel.create({
//     titulo: 'criei o meu titulo 2',
//     descricao: 'criei minha descrição 2'
// })
// .then(dados => console.log(dados))
// .catch(erro => console.log(e));

exports.paginaInicial = (req,res) =>{
    //req.session.usuario = {nome: 'Mauricio',logado: true};
    //console.log(req.session.usuario);
    // req.flash('informa', 'oi oi oi');
    // req.flash('erro', 'deu ruim');
    // req.flash('sucesso', 'deu bom');
    console.log(req.flash('informa'), req.flash('erro'), req.flash('sucesso'))
    res.render('index');
};

exports.recebeInicial= (req,res)=>{
    res.send(req.body);
};

