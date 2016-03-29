/**
 * Created by menzhongxin on 16/3/29.
 */
(function(){
  angular.module('secApp.GroupController',[])
    .controller('GroupController',function($http,$scope,$stateParams){
      var group = $stateParams.group;
      $scope.groups = [];
      $http({
          method:'get',
          url:'http://192.168.1.24:3000/1/contact/group?group='+group,
        dataType:'jsonp'
      }).success(function(data){
        console.log(data);
        $scope.groups = data;
      })
        .error(function(err){
          console.log(err);
        });
    });
})();