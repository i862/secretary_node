/**
 * Created by menzhongxin on 16/4/3.
 */

(function(){
  angular.module('secApp.UnderScoreFactory',[])
    .factory('_',function(){
      return window._;
    });
})();