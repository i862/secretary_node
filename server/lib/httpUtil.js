/**
 * Created by menzhongxin on 16/3/23.
 */
var util = require('util')
  ,commonUtil = require('./commonUtil').util;

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
exports.getRequest = function(req,res,check){
  return _check(res,req.query,check);
};
/**
 * postReq
 * @param req
 * @param res
 * @param check
 * @param onSuccess
 * @param onErr
 */
exports.postRequest = function(req,res,check){
  return _check(res,req.body,check);
};
/**
 * putReq == postReq
 * @param req
 * @param res
 * @param check
 * @param onErr
 */
exports.putRequest = function(req,res,check){
  return this.postRequest(req,res,check);
};

/**
 * delReq ==  getReq
 * @param req
 * @param res
 * @param check
 * @param onErr
 */
exports.delRequest = function(req,res,check){
  return this.getRequest(req,res,check);
};

/**
 * api统一返回
 * @param req
 * @param res
 * @param next
 */
exports.extendApiResponse = function(req,res,next){
  res.set('Content-Type','application/json;charset=UTF-8');

  res.apiOK = function(data){
    res
      .status(200)
      .json(data);
  };
  res.apiERR = function(err){
    if(!err || !err.code)
      error = commonUtil.getErrByCode(1003,err.message);
    else
      error = err;
    res
      .status(500)
      .json(error);
  };
  next();
};

exports.errorhandle = function(err,req,res,next){
  if(typeof res.apiERR === 'function')
    return res.apiERR(err);
};
/**
 * commonResponse
 * @param res
 * @param status
 * @param data
 * @param contentType
 */
var _check = function(res,data,check){
  var must = check.must||[],
    optional = check.optional||[];
  for(var i in must){
    if(!commonUtil.hasValue(data[must[i]])){
      return Promise.reject(commonUtil.getErrByCode(1002,must[i]));
    }
  }
  var fields = commonUtil.union(must,optional);
   return Promise.resolve(commonUtil.pick(data,fields));
};


