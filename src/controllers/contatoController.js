const Contato = require('../models/ContatoModel');
exports.index = (req,res) =>{
    res.render('contato',{
        contato:{}
    });
};

exports.register = async(req,res) =>{
    try{
        const contato = new Contato(req.body);
        await contato.register();
        
        if(contato.errors.length > 0){
            req.flash('errors', contato.errors);
            req.session.save(()=>res.redirect('../contato/index'));
            return;
        }
        req.flash('success', 'contato registrado com sucesso');
        req.session.save(()=>res.redirect(`/contato/index/${contato.contato._id}`));
        return;
    }catch(e){
        console.log(e);
        return res.render('deuRuim');
    }
    
    
};

exports.editIndex = async(req,res) =>{
    if(!req.params.id) return res.render('deuRuim');

    const contato = await Contato.buscaPorId(req.params.id);
    if(!contato) return res.render('deuRuim');

    res.render('contato',{contato});

}

exports.edit = async (req,res)=>{
    try{
        if(!req.params.id) return res.render('deuRuim');
        const contato = new Contato(req.body)
        await contato.edit(req.params.id);


        
    if(contato.errors.length > 0) {
        req.flash('errors', contato.errors);
        req.session.save(() => res.redirect(`/contato/index/${req.params.id}`));
        return;
      }

        req.flash('success', 'contato editado com sucesso');
        req.session.save(()=>res.redirect(`/contato/index/${contato.contato._id}`));
        return;
    }catch(e){
        console.log(e);
        return res.render('deuRuim');
    }
    

}

exports.delete = async function(req,res){
    if(!req.params.id) return res.render('deuRuim');

    const contato = await Contato.delete(req.params.id);
    if(!contato) return res.render('deuRuim');

    req.flash('success', 'contato apagado com sucesso');
    req.session.save(()=>res.redirect(`back`));
    return;
    
}