/**
 * Created by menzhongxin on 16/3/22.
 */

var mongoose = require('mongoose'),
  config = require('./server').config;
var options = {
  server: { poolSize: 5,socketOptions:{keepAlive:1} },
  mongos:true
};
mongoose.connect(config.MONGODB_URL,options);

mongoose.set('debug', true);
mongoose.plugin(require('../models/baseSchema'));
var db = mongoose.connection;
db.
db.on('error',function(err){
  console.log(err);
});
db.once('open',function(){
  console.log('Connect to mongodb sucessfully');
});
exports.mongoose = mongoose;