var app = angular.module('dictatorTinder', []);

app.controller('dictatorCtrl', ['$http', function($http) {
  var self = this;
  self.dictators = [];

  $http.get('demo-data.json').success(function(data) {
    self.dictators = data;
  });
}]);