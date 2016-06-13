/**
 * Created by menzhongxin on 16/3/29.
 */
(function(){
  angular.module('secApp.UserController',[])
    .controller('UserController',function($http,$scope,$stateParams,$rootScope){
      $scope.current = JSON.parse($stateParams.current);
      $scope.groups = $rootScope.current;
      //console.log($scope.user);
    });
})();