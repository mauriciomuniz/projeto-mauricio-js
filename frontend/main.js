import 'core-js/stable';
import 'regenerator-runtime/runtime';
// import './assets/css/style.css';
console.log("passa no main.js")
import Login from './modules/Login';
const login = new Login('.form-login');
const register = new Login('.form-register');


login.init();
register.init();