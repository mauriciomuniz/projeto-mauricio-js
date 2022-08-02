exports.index = (req,res) =>{
    res.render('index',{
        titulo:'Aqui o titulo da página',
        numero: [1,2,3,4,5,6,7,8,9]
    });
    return
};

exports.recebeInicial= (req,res)=>{
    res.send(req.body);
    return;
};

