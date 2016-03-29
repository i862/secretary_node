var express = require('express')
, path = require('path')
, favicon = require('serve-favicon')
, logger = require('morgan')
, cookieParser = require('cookie-parser')
, ejs = require('ejs')
, bodyParser = require('body-parser')
, requireDir = require('require-dir')
, routers = requireDir('./server/routers')
, serveStatic = require('serve-static');

var app = express();

// view engine setup
app.use(serveStatic(__dirname + '/public'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

for(var router in routers){
  console.log(router);
   app.use('/1',routers[router]);
};

module.exports = app;
