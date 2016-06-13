var _modules = [
  'ui.router'
    ,'secApp.HomeController'
    ,'secApp.GroupController'
    ,'secApp.UsersController'
    ,'secApp.UserController'
    ,'secApp.LoginController'
    ,'secApp.RegisterController'
    ,'secApp.CssFilter'
    ,'secApp.BaseInfoFilter'
    ,'secApp.UnderScoreFactory'
    ,'secApp.ConstantsFactory'
    ,'secApp.UserService'
    ,'secApp.VerificationService'
    ,'secApp.ngFocusDirective'

];
(function() {
  angular
    .module('secApp',_modules)
    .run(function($rootScope,$injector,$state){
      var userService = $injector.get('UserService');
      //register verifiy
      $rootScope.verifiy = $injector.get('Verification');
      //register constants
      $rootScope.constants = $injector.get('Constants');
      $rootScope.$on('$stateChangeStart',function(event, next){
        //if(true && next.name != 'login'){
        //  event.preventDefault();
        //  $state.go('login');
        //}
      });
    })
    .config(function ($urlRouterProvider,$stateProvider) {

      $stateProvider
        .state('home', {
          url: "",
          controller:"HomeController",
          templateUrl: "../views/home.html"
        })
        .state('users', {
          url: "/users/:current?type&count",
          controller:"UsersController",
          templateUrl: "../views/users.html"
        })
        .state('groups', {
          url: "/groups/:current",
          controller:"GroupController",
          templateUrl: "../views/groups.html"
        })
        .state('user', {
          url: "/user/:current",
          controller:"UserController",
          templateUrl: "../views/user.html"
        })
        .state('login', {
          url: "/login",
          templateUrl: "../views/login.html",
          controller:"LoginController"
        })
        .state('register', {
          url: "/register",
          templateUrl: "../views/register.html",
          controller:"RegisterController"
        });
    })
})();
