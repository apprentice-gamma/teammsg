(function() {
  var dictatorFilters = angular.module('dictatorFilters', []);

  dictatorFilters.filter('checkmark', function() {
  	return function(input) {
    	return input ? '\u2713' : '\u2718';
  	};
  });

  dictatorFilters.filter('agefix', function(){
  	return function(input) {
  		input+=5;
  		return Math.ceil(input);
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

  dictatorFilters.filter('facialHair', function(){
    return function(input) {
      input = input.toString();
      var pattern = /^[A-Za-z\s]+$/
      var letters = pattern.test(input);
      if(input.length < 4){
        return "mustache";
      } else if (letters){
        return input;
      } else
        return "beard";
    };
  });
})();