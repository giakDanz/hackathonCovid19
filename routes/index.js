var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BIENVENIDOS' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'INICIAR SESION PARA CONTINUAR' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'INICIAR SESION PARA CONTINUAR' });
});

router.get('/nuevoUsuario', function(req, res, next) {
  res.render('register', { title: 'REGISTRO' });
})

router.get('/validacion', function(req, res, next) {
  res.render('validacion', { title: 'Confirma tu número celular' ,
  numero: 960169051});
});
module.exports = router;
