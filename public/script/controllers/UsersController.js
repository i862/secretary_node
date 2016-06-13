/**
 * Created by menzhongxin on 16/3/29.
 */
(function(){
  angular.module('secApp.UsersController',[])
    .controller('UsersController',function($http,$scope,$stateParams,$rootScope){
      $scope.users ={
        title:$stateParams.current,
        count:$stateParams.count,
        group:$stateParams.type,
        list:[]
      };
      $http({
        method:'get',
        url:'/1/contact/list?group=' + $scope.users.group + '&groupValue=' + $scope.users.title
      }).success(function(data){
          console.log(data);
          $scope.users.list = data;
        })
        .error(function(err){
          console.log(err);
        });
    });
})();