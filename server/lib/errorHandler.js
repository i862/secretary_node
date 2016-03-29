/**
 * Created by menzhongxin on 16/3/25.
 */
var err = require('../json/ErrorCode');

exports.getErrByCode = function(code){
  if(err.hasOwnProperty(code))
    return err[code];
  else
    return err['00001'];
};