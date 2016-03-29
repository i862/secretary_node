(function() {
  angular
    .module('secApp', ['ui.router','secApp.GroupController'])
    .run([function(){}])
    .config(function ($provide,$httpProvider,$stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: "",
          templateUrl: "../views/home.html"
        })
        .state('users', {
          url: "/users",
          templateUrl: "../views/users.html"
        })
        .state('groups', {
          url: "/groups/:group",
          controller:"GroupController",
          templateUrl: "../views/groups.html"
        })
    })
})();
