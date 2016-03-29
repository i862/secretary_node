/**
 * Created by menzhongxin on 16/3/23.
 */
var contact = require('../models/contact'),
  commonUtil = require('../lib/commonUtil'),
  modelUtil = require('../lib/modelUtil');
var ContactService = function(){};
/**
 * 添加contact
 * @param query
 * @param conditions
 * @param options
 */
ContactService.prototype.add = function(conditions){
  return contact.add(conditions);
};
/**
 *
 * @param conditions
 * @param fields
 * @param pageSlice
 * @returns {Array|{index: number, input: string}|*|Promise}
 */
ContactService.prototype.find = function(conditions,fields,pageSlice){
  return contact.find(conditions,fields,pageSlice).exec();
};
ContactService.prototype.aggregate = function(conditions,group,pageSlice){
  var options = [];
  if(commonUtil.hasValue(conditions))
    options.push(conditions);
  var project = {};
    project[group] = 1;
  options.push({$project:project});
  if(modelUtil.typeOf(contact,group) == 'Array')
    options.push({$unwind:'$' + group});
  options.push({$group:{_id:'$' + group,count:{$sum:1}}});
  options.push({$skip:pageSlice.skip});
  options.push({$limit:pageSlice.limit});
  console.log(options);
  return contact.aggregate(options).exec();
};
/**
 * updateOne
 * @param query
 * @param conditions
 * @param options
 * @returns {Array|{index: number, input: string}|*|Promise}
 */
ContactService.prototype.update = function(query,conditions,options){
  conditions.updatedAt = Date.now();
  return contact.findOneAndUpdate(query,conditions,options).exec();
};
/**
 * multiUpdate
 * @param query
 * @param conditions
 * @param options
 * @returns {Array|{index: number, input: string}|*|Promise}
 */
ContactService.prototype.multiUpdate = function(query,conditions,options){
  conditions.updatedAt = Date.now();
  return contact.update(query,conditions,options).exec();
};

module.exports = new ContactService();

