/**
 * Created by menzhongxin on 16/6/13.
 */
var commonUtil = require('../lib/commonUtil').util
  ,config = require('../config/server').config
  ,User = require('../models/Users');
/**
 * options.timeout 请求超时时间
 * @param options
 * @returns {Function}
 */
exports.auth = function(){
  return this.authFilter;
};

exports.authFilter = function(req,res,next){
  var userId = req.headers['x-user-id']||''
    ,timestamp = req.headers['timestamp']||0;

  if(!commonUtil.isObjectId(userId))/*未登录*/
    return res.apiERR(commonUtil.getErrByCode(1004));

  if(!timestamp)/*缺少timestamp*/
    return res.apiERR(commonUtil.getErrByCode(1005));

  if(Date.now() - timestamp > config.auth.timeout)/*请求时间过长*/
    return res.apiERR(commonUtil.getErrByCode(1006));
  User.findById(userId)
    .then(function(current){
      if(!current)
        return res.apiERR(commonUtil.getErrByCode(2001));

      next();/*通过验证*/
    })
    .catch(function(err){
      return res.apiERR(err);
    });
};
