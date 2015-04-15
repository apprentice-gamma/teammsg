(function() {
  var app = angular.module('dictatorTinder', ['ngRoute', 'ngResource']);

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/dictator-list.html'
      }).
      when('/:dictatorId', {
        templateUrl: 'partials/dictator-profile.html'
      });
  }]);
})();