(function() {
  angular
    .module('secApp', ['ui.router'])
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
    })
})();
