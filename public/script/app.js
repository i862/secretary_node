(function() {
  angular
    .module('secApp', ['ui.router','secApp.GroupController','secApp.UsersController','secApp.CssFitler'])
    .run([function(){}])
    .config(function ($provide,$httpProvider,$stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: "",
          templateUrl: "../views/home.html"
        })
        .state('users', {
          url: "/users/:group/:name/?value&count",
          controller:"UsersController",
          templateUrl: "../views/users.html"
        })
        .state('groups', {
          url: "/groups/:group/:name",
          controller:"GroupController",
          templateUrl: "../views/groups.html"
        })
    })
})();
