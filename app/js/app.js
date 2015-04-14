(function() {
  var app = angular.module('dictatorTinder', []);

  app.controller('dictatorProfileCtrl', ['$http', function($http) {
    var self = this;
    self.dictators = [];

    $http.get('demo-data.json').success(function(data) {
      self.dictators = data;
    });
  }]);
})();