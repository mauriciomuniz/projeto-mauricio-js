exports.middlewareGlobal = (req,res,next)=>{
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next();
};

exports.outroMiddleware = (req,res,next)=>{
    if(req.body.cliente){
        req.body.cliente=req.body.cliente.replace('mauricio','trocou mauricio')
    }
    
    next();
}

exports.checkCsrfError = (err,req,res,next)=>{
    if(err){
        return res.render('deuRuim');
    }
    next();
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
  };