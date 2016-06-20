/**
 * Created by menzhongxin on 16/3/23.
 */
var util = require('util')
  ,dateformat = require('dateformat')
  ,_ = require('underscore')
  ,errors = require('../json/ErrorCode')
  ,crypto = require('crypto');

var commonUtil  = _;

/**
 * 根据secret加密指定str
 * @param secret
 * @param data
 * @returns {*}
 */
commonUtil.sign = function(secret,str){
  if(typeof str !== 'string')
    throw 'the signed value must be a string';
  return crypto.createHmac('sha256',secret).update(str).digest('hex');
};

commonUtil.isObjectId = function(str){
  var reg = new RegExp('[0-9a-fA-F]{24}','i');
  return reg.test(str||'');
};
/**
 * 判断的值是否存在
 * @param v
 * @returns {boolean}
 */
commonUtil.isExists = function(v){
  if(v === undefined || v === null || v === '')
    return false;
  return true;
};

commonUtil.hasValue = function(v){
  if(typeof v === 'object')
    return !_.isEmpty(v);
  else
    return this.isExists(v);
};
/**
 * 字符串转化为数组
 * null,undefined ---> []; array ---> array ;其他非字符串类型抛出异常
 * @param val 待转换字符串
 * @param splice 切分依据 default: ' '
 * @returns {*}
 */
commonUtil.str2Array = function(val,splice){
  if(!this.isExists(val))
    return [];
  if(_.isArray(val))
    return val;
  if(!_.isString(val))
    throw 'the val should be a String !';
  return val.split(splice|| ' ');
};
/**
 * 日期格式化 default:'yyyy-mm-dd HH:mm:ss'
 * @param date
 * @param format
 * @returns {*}
 */
commonUtil.dateFormat = function(date,format){
  if(!this.isExists(date))
    throw 'the date should not be null !';
  if(!_.isDate(date))
    throw 'the argument of data should be a date';
  format = format|'yyyy-mm-dd HH:mm';
  return dateformat(date,format);

};

/**
 * @param list
 * @returns {Array}
 */
commonUtil.toJSON = function(list){
  if(!_.isArray(list))
    throw 'list should be a Array';
  var rs = [];
  list.forEach(function(current){
    rs.push(current.toJSON());
  });
  return rs;
};

/**
 *
 * @param list
 * @returns {Array}
 */
commonUtil.toObject = function(list){
  if(!_.isArray(list))
    throw 'list should be a Array';
  var rs = [];
  list.forEach(function(current){
    rs.push(current.toObject());
  });
  return rs;
};

commonUtil.encryptPassword = function(phoneNum,password,isTwoTimes){
  if(isTwoTimes)
    return MD5(phoneNum + MD5(phoneNum + password));
  else
    return MD5(phoneNum + password);
};

commonUtil.getErrByCode = function(code){
  var error = errors[code]||errors[1001]
      ,param = arguments[1];
  return {
    code:error.code,
    httpCode:error.httpCode,
    msg:error.msg + (param?(':'+param):'')
  };
};
exports.util = commonUtil;

var MD5 = function(data){
  return crypto.createHash('md5').update(data).digest('hex').toUpperCase();
};

