var express = require('express')
  , path = require('path')
  , logger = require('morgan')
  , bodyParser = require('body-parser')
  , requireDir = require('require-dir')
  , routers = requireDir('./server/routers')
  , httpUtil = require('./server/lib/httpUtil')
  , serveStatic = require('serve-static');

var app = express();

app.use(serveStatic(__dirname + '/public'));
app.use(bodyParser.json({type: 'application/json;charset=UTF-8'}));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(logger('dev'));
app.use(httpUtil.extendApiResponse);


for(var router in routers){
  console.log(router);
   app.use('/1',routers[router]);
};

app.use(httpUtil.errorhandle);


module.exports = app;
