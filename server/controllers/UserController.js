/**
 * Created by menzhongxin on 16/3/23.
 */
var UserService = require('../services/UserService'),
  httpUtil = require('../lib/httpUtil'),
  commonUtil = require('../lib/commonUtil').util;

var UserController = function(){};

/**
 * 用户登录
 *
 * @param req
 * @param res
 */
UserController.prototype.auth = function(req,res){
  var user;
  httpUtil.postRequest(req,{must:['phoneNum','password']})
    .then(function(data){
      user = data;
      return UserService.findByPhoneNum(data.phoneNum);
    })
    .then(function(current){
      if(!current)
        return Promise.reject(commonUtil.getErrByCode(2001)); /*用户不存在*/
      current = JSON.parse(JSON.stringify(current));
      if(current.password !== commonUtil.encryptPassword(user.phoneNum,user.password.toUpperCase(),false))
        return Promise.reject(commonUtil.getErrByCode(2002)); /*密码错误*/
      return res.apiOK(current);
    })
    .catch(function(err){
      res.apiERR(err);
    });
};

/**
 * 注册用户
 * @param req
 * @param res
 */
UserController.prototype.register = function(req,res){
  httpUtil.postRequest(req,
    {
      must:['phoneNum','password','name'],
      optional:['nickName']
    })
    .then(function(data){
      !data.nickName&&(data.nickName = data.name);
      data.password = commonUtil.encryptPassword(data.phoneNum,data.password,false);
      return UserService.addUser(data);
    })
    .then(function(user){
      return res.apiOK(user);
    })
    .catch(function(err){
      res.apiERR(err);
    });
};

/**
 * 修改用户基本信息
 * @param req
 * @param res
 */
UserController.prototype.updateBaseInfo = function(req,res){
  httpUtil.putRequest(req,{
    must:['id'],
    optional:['name','nickName']
  })
    .then(function(user){
      var id = user.id;
      delete user.id;
      return UserService.update(id,user);
    })
    .then(function(u){
      return res.apiOK(u);
    })
    .catch(function(err){
      res.apiERR(err);
    });
};
/**
 * 修改密码
 * @param req
 * @param res
 */
UserController.prototype.modifyPassword = function(req,res){
  var user;
  httpUtil.putRequest(req,{
    must:['id','password','nPassword']
  })
    .then(function(data){
      user = data;
      return UserService.findById(user.id);
    })
    .then(function(current){
      if(!current)
        return Promise.reject(commonUtil.getErrByCode(2001));
      if(current.password != commonUtil.encryptPassword(current.phoneNum,user.password,false))
        return Promise.reject(commonUtil.getErrByCode(2003));
      return UserService.update(user.id,
        {password:commonUtil.encryptPassword(current.phoneNum,user.nPassword,false)});
    })
    .then(function(u){
      return res.apiOK(u);
    })
    .catch(function(err){
      res.apiERR(err);
    });
};





module.exports = new UserController();
