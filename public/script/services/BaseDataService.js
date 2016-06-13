/**
 * Created by menzhongxin on 16/4/3.
 */

(function(){
  angular.module('secApp.BaseData',[])
    .service('BaseData',function($http){
      var baseData = {
        data:{
          index:{
            type:'',
            title:''
          },
          groups:[],
          users:[],
          currentGroup:'',
          currentUser:{}
        }
      };
      baseData.changeGroups = function(index){
        baseData.data.index = index;
        $http({
          method:'get',
          url:'/1/contact/group?group=' + baseData.data.index.type
        }).success(function(list){
            baseData.data.groups = list;
          })
          .error(function(err){
            console.log(err);
          });
      };
      baseData.getGroups = function(){
        return baseData.data.groups;
      };

      baseData.changeUsers = function(group){
        BaseData.currentGroup = group;
        $http({
          method:'get',
          url:'/1/contact/list?group=' + baseData.data.index.key + '&groupValue=' + group
        }).success(function(data){
            baseData.data.users = data;
          })
          .error(function(err){
            console.log(err);
          });
      };
      baseData.getUsers = function(){
        return baseData.data.users;
      };

      baseData.changeUser = function(user){
        baseData.data.currentUser = user;
      };
      baseData.getUser = function(){
        return baseData.data.currentUser;
      };
      return baseData;
    });
})();