/**
 * Created by menzhongxin on 16/3/29.
 */
(function(){
  angular.module('secApp.GroupController',[])
    .controller('GroupController',function($http,$scope,$stateParams){
      $scope.group = {
        type:$stateParams.group,
        name:$stateParams.name,
        list:[]
      };
      $http({
          method:'get',
          url:'/1/contact/group?group=' + $scope.group.type,
        dataType:'jsonp'
      }).success(function(data){
        console.log(data);
        $scope.group.list = data;
      })
        .error(function(err){
          console.log(err);
        });
    });
})();