(function() {
  var dictatorServices = angular.module('dictatorServices', ['ngResource']);
  
  dictatorServices.factory('DictatorService', ['$resource', 
    function ($resource) {
      return $resource('demo-data.json');
  }]);
})();