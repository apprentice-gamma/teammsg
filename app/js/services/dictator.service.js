(function() {
  var dictatorServices = angular.module('dictatorServices', ['ngResource']);
  
  dictatorServices.factory('DictatorService', ['$resource', 
    function ($resource) {
      return $resource('http://project2-backend.herokuapp.com/api/dictators');
  }]);
})();