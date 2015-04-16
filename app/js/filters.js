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
  		var pattern = /^[A-Za-z\s]+$/
  		var letters = pattern.test(input);
  		if (letters){
  			return input;
  		}
  		else
  			return "Jason";
  	};
  });
})();