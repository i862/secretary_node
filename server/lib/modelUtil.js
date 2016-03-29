/**
 * Created by menzhongxin on 16/3/23.
 */
var util = require('util'),
  _ = require('underscore'),
  dateformat = require('dateformat'),
  commonUtil = require('./commonUtil');
/**
 *
 * @param val
 * @returns {*}
 */
exports.str2Array = function(val){
  return commonUtil.str2Array(val,',');
};
/**
 *
 * @param date
 * @returns {*}
 */
exports.dateFormat = function(date){
  return dateformat(date,'yyyy-mm-dd HH:mm:ss');
};
/**
 * 获取指定model中对应key的类型
 * @param model must
 * @param key   must
 * @returns {*}
 */
exports.typeOf = function(model,key){
  return model.schema.tree[key].type.name;
};

