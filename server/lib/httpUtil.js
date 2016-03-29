/**
 * Created by menzhongxin on 16/3/23.
 */
var util = require('util'),
  commonUtil = require('./commonUtil'),
  _ = require('underscore');

/**
 * 配置分页配置
 * @param req
 * @param sort
 * @returns {{skip: number, limit: (*|number), sort: (*|{createdAt: number})}}
 */
exports.pagination = function(req,sort){
  var pageNum = req.query.pageNum||1,
    pageSize = req.query.pageSize||20,
    sort = sort||{updatedAt:-1};
  if(!sort.updatedAt)
    sort.updatedAt = -1;
  return {skip:(pageNum-1)*pageSize,limit:parseInt(pageSize),sort:sort};
};
/**
 * 通过改变查询条件进行分页
 * @param req
 * @param sort
 * @returns {{limit: (*|number), sort: (*|{updatedAt: number})}}
 */
exports.paginationByQuery = function(req,sort){
  var pageSize = req.query.pageSize||20,
    sort = sort||{updatedAt:-1};
  if(!sort.updatedAt)
    sort.updatedAt = -1;
  return {limit:parseInt(pageSize),sort:sort};
};
/**
 * 分页查询条件处理
 * @param req
 * @param pagination
 * @param query
 * @returns {*|{}}
 */
exports.configPaginationQuery = function(query,pageSlice){
  var updatedAt = pageSlice.sort.updatedAt,
    query = query||{};
  if(!query || !query.lastMark)
    return query;
  if(updatedAt == -1)
    query.updatedAt = {$lt:query.lastMark};
  else
    query.updatedAt = {$gt:query.lastMark};
  return query;
};
/**
 * getReq
 * @param req
 * @param res
 * @param check
 * @param onSuccess
 * @param onErr
 */
exports.getRequest = function(req,res,check,onSuccess,onErr){
 _check(res,req.query,check,onSuccess,onErr);
};
/**
 * postReq
 * @param req
 * @param res
 * @param check
 * @param onSuccess
 * @param onErr
 */
exports.postRequest = function(req,res,check,onSuccess,onErr){
  _check(res,req.body,check,onSuccess,onErr);
};
/**
 * putReq == postReq
 * @param req
 * @param res
 * @param check
 * @param onErr
 */
exports.putRequest = function(req,res,check,onErr){
  this.postRequest(req,res,check,onErr);
};

/**
 * delReq ==  getReq
 * @param req
 * @param res
 * @param check
 * @param onErr
 */
exports.delRequest = function(req,res,check,onErr){
  this.getRequest(req,res,check,onErr);
};

/**
 * OK
 * @param res
 * @param data
 * @constructor
 */
exports.OK = function(res,data){
  return _commonReponse(res,200,data);
};

exports.OUT_ERR =function(res,err){
  return _commonReponse(res,500,err);
};
/**
 * commonResponse
 * @param res
 * @param status
 * @param data
 * @param contentType
 */
var _commonReponse = function(res,status,data,contentType){
  contentType = contentType||'application/json',
    data = data||{};
  res.status(status)
    .set('Content-Type',contentType)
    .set('Access-Control-Allow-Origin','*')
    .json(data);
};
var _check = function(res,data,check,onSuccess,onErr){
  var must = check.must||[],
    optional = check.optional||[],
    onErr = onErr || _defFieldMissErr;
  for(var i in must){
    if(!commonUtil.hasValue(data[must[i]])){
      return onErr(res,commonUtil.getErrByCode('00002'),must[i]);
    }
  }
  var fields = _.union(must,optional);
   return onSuccess(res,_.pick(data,fields));
};

var _defFieldMissErr = function(res,err,field){
  err.msg = field + err.msg;
  return _commonReponse(res,err.httpCode,err);
};
