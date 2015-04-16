(function() {
  var dictatorFilters = angular.module('dictatorFilters', []);

  dictatorFilters.filter('checkmark', function() {
  	return function(input) {
    	return input ? '\u2713' : '\u2718';
  	};
  });

  dictatorFilters.filter('age', function(){
  	return function(input) {
  		return $filter('number')(input+5);
  	};
  });

  dictatorFilters.filter('name', function(){
  	return function(input) {
  		if (input.charAt(0).parseInt().isNaN()){
  			return input;
  		}
  		else
  			return "Anonymous";
  	};
  });

})();