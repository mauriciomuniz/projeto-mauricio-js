exports.middlewareGlobal = (req,res,next)=>{
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