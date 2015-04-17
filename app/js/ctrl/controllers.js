(function() {
  var dictatorControllers = angular.module('dictatorControllers', []);

  dictatorControllers.controller('dictatorListCtrl', ['DictatorService', function(DictatorService) {
    var self = this;
    self.dictators = [];
    self.dictators = DictatorService.query();
    }
  }]);

  dictatorControllers.controller('dictatorProfileCtrl', ['DictatorService', '$routeParams', 'Bios', function(DictatorService, $routeParams, Bios) {
    var self = this;
    self.dictator = DictatorService.get({id: $routeParams.dictatorId});
    self.randomBio = Bios[Math.floor(Math.random() * Bios.length)];
    self.randomNum = Math.floor(Math.random() * 22) + 1;
    self.totalProles = function(){
      var count = 0;
      for (i=0; i < dictator.owned_households.length; i++)
        count+= dictator.owned_households[i].residents.length;
      
      return count;
    }
    self.totalIncome = function(){
      var count = 0;
      for (i=0; i < dictator.owned_households.length; i++)
        count+= dictator.owned_households[i].houshold_income;
      
      return count;
    }
  }]);

  dictatorControllers.controller('modalCtrl', ['$scope', function($scope) {
    var self = this;
    self.modalShown = true;
    self.toggleModal = function() {
      self.modalShown = !self.modalShown;
    };
  }]);

})();