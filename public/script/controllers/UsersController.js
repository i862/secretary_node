/**
 * Created by menzhongxin on 16/3/29.
 */
(function(){
  angular.module('secApp.UsersController',[])
    .controller('UsersController',function($http,$scope,$stateParams){
      $scope.users = {
        group:$stateParams.group,
        groupValue:$stateParams.value,
        count:$stateParams.count||1,
        name:$stateParams.name,
        list:[]
      };
      $http({
          method:'get',
          url:'/1/contact/list?group=' + $scope.users.group + '&groupValue=' + $scope.users.groupValue

      }).success(function(data){
        console.log(data);
        $scope.users.list = data;
      })
        .error(function(err){
          console.log(err);
        });
    });
})();