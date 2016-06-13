/**
 * Created by menzhongxin on 16/4/3.
 */

(function(){
  angular.module('secApp.VerificationService',[])
    .service('Verification',function(){
      var verifiy = {
        success:function(e){
          return e.$valid;
        },
        error:function(e){
          return e.$invalid;
        }
      };

      return verifiy;
    });
})();