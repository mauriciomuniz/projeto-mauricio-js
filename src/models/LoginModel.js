const mongoose = require('mongoose');
const { register } = require('../controllers/loginController');
const validator = require('validator');

const LoginSchema = new mongoose.Schema({
    email: {type: String, required: true},
    senha: {type: String, required: true}
    
});

const LoginModel = mongoose.model('Login',LoginSchema);

class Login{
    constructor(body){
        this.body=body;
        this.error=[];
        this.user = null;
    }


    async register(){
        this.valida();
        if(this.errors.length>0) return;
        try{
            this.user = await LoginModel.create(this.body);
        }catch(e){
            console.log(e)
        }
        
    }
        
    valida(){
        //validação
        this.cleanUp();
        if(validator.isEmail(this.body.email)){
            this.errors.push('Email incorreto');
        }
        if(this.body.password.length< 3 || this.body.password.length > 50){
            this.errors.push('a senha precisa ter entre 3 e 50 caracteres');
        }
    };
    
    cleanUp(){
        for(const key in this.body){
            if(typeof this.body[key]!== 'string'){
                this.body[key]='';
            }
        }
        this.body = {
            email: this.body.email,
            password: this.body.password
        };
    };

    



};




module.exports = LoginModel;