/**
 * Created by menzhongxin on 16/3/30.
 */

(function(){
  angular.module('secApp.BaseInfoFilter',[])
    .filter('groupTitle',function(){
      return function(type){
       var groups = {
         company:'公司',
         industry:'行业',
         skilledAt:'擅长领域'
       };
        return groups[type]||'';
      }
    })
})();