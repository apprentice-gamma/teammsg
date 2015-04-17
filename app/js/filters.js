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

  dictatorFilters.filter('address', function(){
    return function(input) {
      var inputTest = input.substring(0, 2);
      var pattern = /^[0-9\s]+$/
      var numbers = pattern.test(inputTest);
      if (numbers){
        return input;
      }
      else
        return "Area 51";
    };
  });

  dictatorFilters.filter('city', function(){
    return function(input) {
      input = input.toString();
      var pattern = /^[A-Za-z\s]+$/
      var letters = pattern.test(input);
      if(input === "undefined"){
        return "Detroit";
      } else if(letters){
        return input;
      } else
        return "Detroit";
    };
  });

  dictatorFilters.filter('state', function(){
    return function(input) {
      var testInput = input.toString();
      var pattern = /^[A-Za-z\s]+$/
      var letters = pattern.test(testInput);
      if(input.length !== 2){
        return "HI";
      } else if(letters){
        return input;
      } else
        return "HI";
    };
  });

})();