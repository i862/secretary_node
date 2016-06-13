/**
 * Created by menzhongxin on 16/3/23.
 */
var ContactService = require('../services/ContactService'),
  httpUtil = require('../lib/httpUtil'),
  commonUtil = require('../lib/commonUtil').util;

/**
 * 分类
 * @param req
 * @param res
 */
exports.aggregate = function(req,res){
  httpUtil.getRequest(req,res,{must:['group']})
    .then(function(params){
      var pageSlice = httpUtil.pagination(req,{createdAt:-1});
      return ContactService.aggregate({},params.group,pageSlice);
    })
    .then(function(data){
      return res.apiOK(data);
    })
    .catch(function(err){
      return res.apiERR(err);
    });
};


/**
 * 获取分组下的联系人列表
 * @param req
 * @param res
 */
exports.listByGroup = function(req,res){
  httpUtil.getRequest(req,res,{
    must:['group','groupValue'],
    optional:['lastMark']
  })
    .then(function(data){
        console.log(data);
        var pageSlice = httpUtil.paginationByQuery(req,{createdAt:-1});
        var conditions = {};
        conditions[data.group] = data.groupValue;
        return ContactService.find(httpUtil.configPaginationQuery(conditions,pageSlice),{},pageSlice);
      })
    .then(function(list){
      return res.apiOK(list);
    })
    .catch(function(err){
        return res.apiERR(err);
    });
};
