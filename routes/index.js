const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const {check, validationResult} = require('express-validator');

let Usuario = require('../models/usuario');

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
    return res.status(422).json({
      errors: errors.array()
    });
  }
  res.status(202).json({
    success: 'Ok'
  });
  /*let newUser = new Usuario({
    nombre: nombre,
    apellido: apellido,
    tipoDoc: tipoDoc,
    documento: documento,
    direccion: direccion,
    celular: celular,
    ciudad: ciudad,
    correo: correo,
    contrasena: contrasena,
    repContrasena: repContrasena,
  })
  newUser.save((err) => {
    if(err){
      console.log(err);
      return;
    }
  })*/

  /*let errors = req.validationErrors();

  if(errors){
    res.render('crearUsuario', {
      errors:errors
    });
  }else{
    let newUser = new User({
      nombre: nombre,
      apellido: apellido,
      tipoDoc: tipoDoc,
      documento: documento,
      direccion: direccion,
      celular: celular,
      ciudad: ciudad,
      correo: correo,
      contrasena: contrasena,
      repContrasena: repContrasena,
    })
    bcrypt.genSalt(10, (err,salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if(err){
          console.log(err)
        }
        newUser.password = hash;
        console.log(hash)
        newUser.save((err) => {
          if(err){
            console.log(err);
            return;
          }
          req.flash('success', 'Usuario creado');
          res.redirect('/home')
        })
      })
    })
  }*/
});

router.get('/home', (req, res) => {
  res.render('home')
})
module.exports = router;
