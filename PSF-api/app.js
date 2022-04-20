var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors = require("cors");

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

db = mongoose.connect(
  "mongodb+srv://nikit:nikit@cluster0.053sm.mongodb.net/UserHyperLocal?retryWrites=true&w=majority",
  (err) => {
    console.log("Database connected");
    if (err) {
      console.log(err);
    }
  }
);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var visitorsRouter = require('./routes/visitors');
var usersLoginRouter = require('./routes/usersLogin');
var feedbackRouter = require('./routes/feedback')
//var policeStationRouter = require('./routes/police-station')
var psUserRouter = require('./routes/ps-user')

var app = express();


app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/visitors', visitorsRouter);
app.use('/usersLogin', usersLoginRouter);
app.use('/feedback', feedbackRouter);
//app.use('/police-station', policeStationRouter);
app.use('/ps-user', psUserRouter);

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
