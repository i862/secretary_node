/**
 * Created by menzhongxin on 16/4/3.
 */

(function(){
  angular.module('secApp.ConstantsFactory',[])
    .factory('Constants',function(){
      var constants = {
        REGEX : {
          PHONENUM : '^((13[0-9])|(15[^4,\\D])|(18[0,2,5-9]))\\d{8}$'
          ,PASSWORD : '(?!^\\d+$)(?!^[a-zA-Z]+$)(?!^[_#@]+$).{8,}'
        }
      };
      return constants;
    });
})();