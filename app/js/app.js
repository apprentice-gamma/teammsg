(function() {
  var app = angular.module('dictatorTinder', ['ngRoute', 'ngResource']);

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/dictator-list.html'
        //controller: 'dictatorListCtrl'
      }).
      when('/:dictatorId', {
        templateUrl: 'partials/dictator-profile.html'
        //controller: 'dictatorProfileCtrl'
      });
  }]);
})();