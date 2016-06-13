/**
 * Created by menzhongxin on 16/3/29.
 */
(function(){
  angular.module('secApp.RegisterController',[])
    .controller('RegisterController',function($http,$scope){
      $scope.register = {};
      $scope.regist = function(){
        console.log($scope.registerForm);
      };

    });
})();