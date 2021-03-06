const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const {check, validationResult} = require('express-validator');
const passport = require('passport');
const config = require('./config/database');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const flash = require('connect-flash');
const session = require('express-session');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

mongoose.connect(config.database, { useNewUrlParser: true });
let db = mongoose.connection;

//Revisar Conexion
db.once('open', function(){
  console.log('Conectado a MongoDB')
});

// BodyParser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Express Session Middleware
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
}))


//Express Message Middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
