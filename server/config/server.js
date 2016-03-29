/**
 * Created by menzhongxin on 16/3/22.
 */

var
  DB_NAME = 'secretary',
  MONGODB_HOST = '115.28.45.182',
  MONGODB_PORT = '27017',
  MONGODB_USER = 'secretary',
  MONGODB_PWD = 'amen1991';

var config = {
  MONGODB_URL: 'mongodb://' + MONGODB_USER + ':' + MONGODB_PWD + '@' + MONGODB_HOST + ':' + MONGODB_PORT + '/' + DB_NAME
};
exports.server = config;
