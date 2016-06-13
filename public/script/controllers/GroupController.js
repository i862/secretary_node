/**
 * Created by menzhongxin on 16/3/29.
 */
(function(){
  angular.module('secApp.GroupController',[])
    .controller('GroupController',function($http,$scope,$stateParams){
      $scope.current = {
        list:[],
        type:$stateParams.current
      };
      $http({
          method:'get',
          url:'/1/contact/group?group=' + $scope.current.type
      }).success(function(data){
        console.log(data);
        $scope.current.list = data;
      })
        .error(function(err){
          console.log(err);
        });
    });
})();