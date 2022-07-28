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

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes= require('./routes');
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');
const {middlewareGlobal,checkCsrfError,csrfMiddleware, outroMiddleware} = require('./src/middlewares/middleware');

app.use(helmet());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.resolve(__dirname,'public')));

const sessionOptions = session({
    secret: 'shaushaush uauhsuahsuahsuahs uashuahsahsu',
    store: MongoStore.create({mongoUrl: process.env.CONNECTIONSTRING}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000*60*60*24*7,
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flash());

app.set('views',path.resolve(__dirname, 'src','views'));
//engine para tratar dados no template html
app.set('view engine', 'ejs');

app.use(csrf());
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(outroMiddleware);

app.use(routes);

//inicia servidor na porta 3001 quando estiver conectado na base de dados
app.on('funcionando', ()=>{
    app.listen(3001, ()=>{
        console.log('http://localhost:3001');
        console.log('servidor executando na porta 3001')
    });
})

