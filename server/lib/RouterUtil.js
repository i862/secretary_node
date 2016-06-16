/**
 * Created by menzhongxin on 16/6/15.
 */
var router = require('express').Router()
  ,authFilter = require('../middleware/authMiddleware').authFilter;
var myRouter = function(){
};
var methods = ['get','post','put','delete'];
methods.forEach(function(m){
  myRouter.prototype[m] = function(url,method,noAuth){
    noAuth?router[m](url,method):router[m](url,authFilter,method);
  }
});
myRouter.prototype.router = router;
module.exports = new myRouter();
