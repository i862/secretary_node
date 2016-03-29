/**
 * Created by menzhongxin on 16/3/23.
 */
var util = require('util'),
  dateformat = require('dateformat'),
  _ = require('underscore'),
  err = require('../json/ErrorCode');


/**
 * 判断的值是否存在
 * @param v
 * @returns {boolean}
 */
exports.isExists = function(v){
  if(v === undefined || v === null || v === '')
    return false;
  return true;
};

exports.hasValue = function(v){
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
exports.str2Array = function(val,splice){
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
exports.dateFormat = function(date,format){
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
exports.toJSON = function(list){
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
exports.toObject = function(list){
  if(!_.isArray(list))
    throw 'list should be a Array';
  var rs = [];
  list.forEach(function(current){
    rs.push(current.toObject());
  });
  return rs;
};

exports.getErrByCode = function(code){
  if(err.hasOwnProperty(code))
    return err[code];
  else
    return err['00001'];
};
