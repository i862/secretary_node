/**
 * Created by menzhongxin on 16/4/18.
 */
(function() {
  angular.module('secApp.ngFocusDirective', [])
    .directive('ngFocus', [function () {
      var FOCUS_CLASS = "ng-focused";
      return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ctrl) {
          ctrl.$focused = false;
          element.bind('focus', function (evt) {
            element.addClass(FOCUS_CLASS);
            scope.$apply(function () {
              ctrl.$focused = true;
            });
          }).bind('blur', function (evt) {
            element.removeClass(FOCUS_CLASS);
            scope.$apply(function () {
              ctrl.$focused = false;
            });
          });
        }
      }
    }]);
})();