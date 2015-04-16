(function() {
  var dictatorFilters = angular.module('dictatorFilters', []);

  angular.module('dictatorFilters', []).filter('checkmark', function() {
  	return function(input) {
    	return input ? '\u2713' : '\u2718';
  	};
  });



})();