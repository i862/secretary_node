/**
 * Created by menzhongxin on 16/3/22.
 */

var NODE_ENV = process.env.NODE_ENV
  ,MONGO_TEST = {
    DB_NAME : 'test'
    ,MONGODB_HOST : '115.28.45.182'
    ,MONGODB_PORT : '27017'
    ,MONGODB_USER : 'amen'
    ,MONGODB_PWD : 'amenema'
  }
  ,MONGO_PRO = {
    DB_NAME : 'secretary'
    ,MONGODB_HOST : '115.28.45.182'
    ,MONGODB_PORT : '27017'
    ,MONGODB_USER : 'secretary'
    ,MONGODB_PWD : 'secretary6102'
  }
  ,MONGODB_CONFIG = (NODE_ENV == 'production'?MONGO_PRO:MONGO_TEST);
console.log(NODE_ENV);
var config = {
  PORT:3000
  ,VERSION:'/1'
  ,MONGODB_URL: 'mongodb://' + MONGODB_CONFIG.MONGODB_USER + ':'
  + MONGODB_CONFIG.MONGODB_PWD + '@' + MONGODB_CONFIG.MONGODB_HOST
  + ':' + MONGODB_CONFIG.MONGODB_PORT + '/' + MONGODB_CONFIG.DB_NAME
  ,SESSION:{
    genId:function(req){
      return genuuid();
    },
    maxAge:60*60*1000,
    secret:'secretary',
    resave:false,
    saveUninitialized:true,
    cookie: { secure: true }
  }
  ,auth:{
    timeout:NODE_ENV === 'production'?3*60*1000:Infinity
  }
};
exports.config = config;
