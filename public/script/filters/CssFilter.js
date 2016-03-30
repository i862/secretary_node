/**
 * Created by menzhongxin on 16/3/30.
 */

(function(){
  angular.module('secApp.CssFitler',[])
    .filter('labelClass',function(){
      return function(index){
        var labelClass = ['','label-primary','label-success','label-info','label-warning','label-danger'];
        var random = parseInt(Math.random()*100*(index+1));
        return labelClass[random%5];
      }
    })
})();