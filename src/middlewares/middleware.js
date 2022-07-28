exports.middlewareGlobal = (req,res,next)=>{
    res.locals.variavelLocal = 'aqui a variavel';
    if(req.body.cliente){
        console.log(`pegou o dado ${req.body.cliente}`);
    }
    next();
};

exports.outroMiddleware = (req,res,next)=>{
    if(req.body.cliente){
        req.body.cliente=req.body.cliente.replace('mauricio','trocou mauricio')
    }
    
    next();
}

exports.checkCsrfError = (err,req,res,next)=>{
    if(err && 'EBADCSRFTOKEN' === err.code ){
        return res.render('deuRuim');
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
  };