/**
 * Created by menzhongxin on 16/3/22.
 */

var
  DB_NAME = 'test'
  ,MONGODB_HOST = '115.28.45.182'
  ,MONGODB_PORT = '27017'
  ,MONGODB_USER = 'amen'
  ,MONGODB_PWD = 'amenema'
  ,NODE_ENV = process.env.NODE_ENV;

var config = {
  VERSION:'/1'
  ,MONGODB_URL: 'mongodb://' + MONGODB_USER + ':' + MONGODB_PWD + '@' + MONGODB_HOST + ':' + MONGODB_PORT + '/' + DB_NAME
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
