/**
 * Created by menzhongxin on 16/4/3.
 */

(function(){
  angular.module('secApp.BaseData',[])
    .service('BaseData',function(){
      var baseData = {
        index:{
          type:'',
          title:''
        },
        groups:[],
        users:[],
        currentGroup:'',
        currentUser:{}
      };
      return baseData;
    });
})();