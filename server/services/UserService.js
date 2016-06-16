/**
 * Created by menzhongxin on 16/3/23.
 */
var Users = require('../models/Users'),
  commonUtil = require('../lib/commonUtil').util;
var UserService = function(){};
/**
 * 根据手机号查找用户
 * @param phoneNum
 * @returns {Array|{index: number, input: string}|Promise}
 */
UserService.prototype.findByPhoneNum = function(phoneNum){
  return Users.findOne({phoneNum:phoneNum,isDeleted:false}).exec();
};

UserService.prototype.findById = function(id){
  return Users.findById(id).exec();
};

/**
 * 创建新用户
 * @param user
 * @returns {user}
 */
UserService.prototype.addUser = function(user){
  return Users.create(user);
};

/**
 * 更新用户信息
 * @param id
 * @param user
 * @returns {Array|{index: number, input: string}|Promise}
 */
UserService.prototype.update = function(id,user){
  return Users.findOneAndUpdate({_id:id},user,{new:true}).exec();
};
module.exports = new UserService();

