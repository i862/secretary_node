var express = require('express')
  , path = require('path')
  , logger = require('morgan')
  , bodyParser = require('body-parser')
  , favicon = require('serve-favicon')
  , requireDir = require('require-dir')
  , session = require('express-session')
  , cookie = require('cookie-parser')
  , config = require('./server/config/server').config
  , routers = requireDir('./server/routers')
  , httpUtil = require('./server/lib/httpUtil')
  , auth = require('./server/middleware/authMiddleware')
  , serveStatic = require('serve-static');

var app = express();

app.use(cookie());
app.use(session(config.SESSION));
app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(logger('dev'));
app.use(httpUtil.extendApiResponse);

for(var router in routers){
   app.use(routers[router]);
};

app.use(httpUtil.errorhandle);


module.exports = app;
