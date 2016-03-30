(function() {
  angular
    .module('secApp', ['ui.router','secApp.GroupController','secApp.UsersController','secApp.UserController','secApp.CssFitler','secApp.BaseInfoFitler'])
    .run([function(){}])
    .config(function ($provide,$httpProvider,$stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: "",
          templateUrl: "../views/home.html"
        })
        .state('users', {
          url: "/users/:current/:count",
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
    })
})();
