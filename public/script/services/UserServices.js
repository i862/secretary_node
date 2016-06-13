/**
 * Created by menzhongxin on 16/4/3.
 */

(function(){
  angular.module('secApp.UserService',[])
    .service('UserService',function($http,_){
      var user = {
        current:{
          id:'',
          name:'',
          auth:[]
        }
      };
      user.isLogin = function(){
        if(user.current && user.current.id)
          return true;
        return  false;
      };
      user.auth = function(path){
        if(this.isLogin())
          return _.indexOf(user.current.auth,path) > -1;
        return false;
      };
      user.login = function(name,password){
        if(!name || !password)
          return false;
        $http({
          url:'',
          method:'post',
          data:{
            name:'',
            password:''
          }
        })
          .success(function(current){
            if(current){
              user.current.name = current.name;
              user.current.auth = current.auth;
              user.current.id = current._id;
            }

          })
          .error(function(){

          });
      };
      user.logout = function(){
        user.current = {};
      };
      return user;
    });
})();