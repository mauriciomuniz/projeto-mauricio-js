require('dotenv').config();

const express = require('express');
const app = express();
//criando a conexão a base de dados
const mongoose = require('mongoose');

// fazendo uma processa para saber se ocorre conexão
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(()=> {
        console.log('conectando a base de dados!!!')
        app.emit('funcionando')
    })
    .catch(erro=>{
        console.log(erro)
    });

const routes= require('./routes');
const path = require('path');
const {middlewareGlobal,outroMiddleware} = require('./src/middlewares/middleware');

app.use(express.urlencoded({extended:true}));

app.use(express.static(path.resolve(__dirname,'public')));

app.set('views',path.resolve(__dirname, 'src','views'));
//engine para tratar dados no template html
app.set('view engine', 'ejs');

app.use(middlewareGlobal);
app.use(outroMiddleware);

app.use(routes);

//inicia servidor na porta 3001 quando estiver conectado na base de dados
app.on('funcionando', ()=>{
    app.listen(3001, ()=>{
        console.log('http://localhost:3001');
        console.log('servidor executando na porta 3001')
    });
})

