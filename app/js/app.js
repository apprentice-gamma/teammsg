(function() {
  var app = angular.module('dictatorTinder', [
    'ngRoute', 
    'ngResource', 
    'ui.bootstrap',
    'dictatorControllers',
    'dictatorServices',
    'dictatorFilters',
    'ngModal'
  ]);

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