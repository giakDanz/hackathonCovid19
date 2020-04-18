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

module.exports = router;
