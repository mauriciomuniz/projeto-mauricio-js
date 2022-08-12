const Login = require ('../models/LoginModel')

exports.index = (req,res) =>{
    if(req.session.user) return res.render('logado');
    res.render('login');
    
};
exports.register = async (req,res) =>{

        try{
        const login = new Login(req.body);
        await login.register();

        console.log('passa')

        if(login.errors.length > 0){
            req.flash('errors',login.errors);
            req.session.save(function(){
                return res.redirect('../login/index');
            });
            return;
        }

        req.flash('success','Seu usuário foi criado com sucesso.');
        req.session.save(function(){
            return res.redirect('../login/index');
        });

        }catch(e){
            console.log(e);
            return  res.render('deuRuim')

        }
    };

exports.login = async (req,res) =>{

        try{
        const login = new Login(req.body);
        await login.login();

        console.log('passa')

        if(login.errors.length > 0){
            req.flash('errors',login.errors);
            req.session.save(function(){
                return res.redirect('../login/index');
            });
            return;
        }


        req.flash('success','Login realizado com sucesso');
        req.session.user = login.user;
        req.session.save(function(){
            return res.redirect('../login/index');
        });

        }catch(e){
            console.log(e);
            return  res.render('deuRuim')

        }
    }; 

exports.logout = function(req,res){
    req.session.destroy();
    res.redirect('/');
}