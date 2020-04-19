const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const {check, validationResult} = require('express-validator');

let Usuario = require('../models/usuario');
let Establecimiento = require('../models/establecimiento');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BIENVENIDOS' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'INICIAR SESION PARA CONTINUAR' });
});

router.get('/home', function(req, res, next) {
  Establecimiento.find({}, (err, establecimientos) => {
    res.render('home', {
      establecimientos: establecimientos
    })
  })
});

router.get('/nuevoUsuario', function(req, res, next) {
  res.render('register', { title: 'REGISTRO' });
});

router.get('/validacion', function(req, res, next) {
  res.render('validacion', { title: 'Confirma tu número celular' ,
  numero: 960169051});
});


router.post('/nuevoUsuario', [
  check('nombre', 'Nombre es obligatorio').not().isEmpty(),
  check('apellido', 'Apellido es obligatorio').not().isEmpty(),
  check('tipoDoc', 'Seleccionar tipo de Documento').not().isEmpty(),
  check('documento', 'Documento es obligatorio').not().isEmpty(),
  check('direccion', 'Direccion es obligatorio').not().isEmpty(),
  check('celular', 'Celular es obligatorio').not().isEmpty(),
  check('ciudad', 'Ciudad es obligatorio').not().isEmpty(),
  check('correo', 'Correo es obligatorio').not().isEmpty(),
  check('contrasena', 'Contraseña es obligatorio').not().isEmpty(),
  check('repContrasena', 'Repetir contraseña').not().isEmpty()
  ], function(req, res) {
  const nombre = req.body.nombre;
  const apellido = req.body.apellido;
  const tipoDoc = req.body.tipoDoc;
  const documento = req.body.documento;
  const direccion = req.body.direccion;
  const celular = req.body.celular;
  const ciudad = req.body.ciudad;
  const correo = req.body.correo;
  const contrasena = req.body.contrasena;
  const repContrasena = req.body.repContrasena;
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.redirect('/nuevoRestaurante', {
      errors: errors.array()

    })
  }
  let newUser = new User({
    nombre: nombre,
    ruc: ruc,
    operador: operador,
    celular: celular,
    distrito: distrito,
    direccion: direccion,
    ciudad: ciudad,
    contrasena: contrasena,
  })
  newUser.save((err) => {
    if (err) {
      console.log(err);
      return;
    }
    res.redirect('/home');
  })});

router.get('/registrar', (req, res) => {
  res.render('register', {title: '¿Cómo deseas registrarse?'})
})

router.get('/nuevoRestaurante', (req, res) => {
  res.render('registerRestaurant', {title: 'Registro para restaurante'})
})


router.post('/nuevoRestaurante', [
  check('nombre', 'Nombre es obligatorio').not().isEmpty(),
  check('ruc', 'Ingresar RUC').not().isEmpty(),
  check('operador', 'Ingresar Operador').not().isEmpty(),
  check('celular', 'Celular es obligatorio').not().isEmpty(),
  check('distrito', 'Distrito es obligatorio').not().isEmpty(),
  check('direccion', 'Direccion es obligatorio').not().isEmpty(),
  check('contrasena', 'Contraseña es obligatorio').not().isEmpty(),
  check('repContrasena', 'Repetir contraseña').not().isEmpty()
], function(req, res) {
  const nombre = req.body.nombre;
  const ruc = req.body.ruc;
  const operador = req.body.operador;
  const celular = req.body.celular;
  const distrito = req.body.distrito;
  const direccion = req.body.direccion;
  const ciudad = req.body.ciudad;
  const contrasena = req.body.contrasena;
  const repContrasena = req.body.repContrasena;
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.redirect('/nuevoRestaurante', {
      errors: errors.array()
    })
  }
  let newRestaurante = new Restaurante({
    nombre: nombre,
    ruc: ruc,
    operador: operador,
    celular: celular,
    distrito: distrito,
    direccion: direccion,
    ciudad: ciudad,
    contrasena: contrasena,
  })
  newRestaurante.save((err) => {
    if (err) {
      console.log(err);
      return;
    }
    res.redirect('/main');
  })
});
module.exports = router;
