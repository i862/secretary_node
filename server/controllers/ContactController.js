/**
 * Created by menzhongxin on 16/3/23.
 */
var ContactService = require('../services/ContactService'),
  httpUtil = require('../lib/httpUtil'),
  commonUtil = require('../lib/commonUtil');

/**
 * 分类
 * @param req
 * @param res
 */
exports.aggregate = function(req,res){
  httpUtil.getRequest(req,res,
    {
      must:['group']
    },
    function(res,data){
      var pageSlice = httpUtil.pagination(req,{createdAt:-1});
       ContactService.aggregate({},data.group,pageSlice)
        .then(function(list){
          return httpUtil.OK(res,list);
        },function(err){
          return httpUtil.OUT_ERR(res,err);
        });
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
  },
    function(res,data){
      var pageSlice = httpUtil.paginationByQuery(req,{createdAt:-1});
      ContactService.find(httpUtil.configPaginationQuery(data,pageSlice),{},pageSlice)
        .then(function(list){
        return httpUtil.OK(res,list);
      },function(err){
        return httpUtil.OUT_ERR(res,err);
      });
    });
};
