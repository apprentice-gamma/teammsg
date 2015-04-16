(function() {
  var dictatorControllers = angular.module('dictatorControllers', []);

  dictatorControllers.controller('dictatorListCtrl', ['DictatorService', function(DictatorService) {
    var self = this;
    self.dictators = [];
    self.dictators = DictatorService.query();
  }]);

  dictatorControllers.controller('dictatorProfileCtrl', ['DictatorService', '$routeParams', 'Bios', function(DictatorService, $routeParams, Bios) {
    var self = this;
    self.dictator = DictatorService.get({id: $routeParams.dictatorId});
    self.randomBio = Bios[Math.floor(Math.random() * Bios.length)];
  }]);

  dictatorControllers.controller('modalCtrl', ['$scope', function($scope) {
    var self = this;
    self.modalShown = true;
    self.toggleModal = function() {
      self.modalShown = !self.modalShown;
    };
  }]);

})();