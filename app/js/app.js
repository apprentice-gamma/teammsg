(function() {
  var app = angular.module('dictatorTinder', ['ngRoute', 'ngResource', 'dictatorTinder.controllers']);

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/dictator-list.html'
        controller: 'js/ctrl/dictatorList.ctrl.js'
      }).
      when('/:dictatorId', {
        templateUrl: 'partials/dictator-profile.html'
        controller: 'js/ctrl/dictatorProfile.ctrl.js'
      });
  }]);
})();