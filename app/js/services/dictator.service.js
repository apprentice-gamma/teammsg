(function() {
  var dictatorServices = angular.module('dictatorServices', ['ngResource']);
  
  dictatorServices.factory('DictatorService', ['$resource', 
    function ($resource) {
      return $resource(
        'http://project2-backend.herokuapp.com/api/dictators/:id'
      );
  }]);

  dictatorServices.factory('Bios', [
    function() {
      return [
      "I enjoy long walks on the beach, playing the zither, and oppressing the common people. Message me if you want to get together and plot a coup, if you know what I mean.",
      "Not looking for hookups, so don't ask. I am, however, looking for a left-hand bourgeois to help me plan world domination.  And take care of my cats.",
      "Oppression game on point. If you're a member of the proletariat, don't bother. 6'6 and lots to love.",
      "Future world leader. Let's make fun of people who think freedom is a good idea.",
      "Fearless leader. Loves Netflix. I hope you swiped right for the right reasons.",
      "Favorite quote: History repeats itself, first as tragedy, second as farce. - Karl Marx",
      "I like my beer dark, my whiskey strong, and my people oppressed. Message me if you want to talk about your pets, our future together, or totalitarianism.",
      "I'm watching you.",
      "I want to see if you can run faster than a bullet ;)",
      "Looking for a special friend to vacation in Libya with...",
      "I don't care if you respect me as long as you fear me.",
      "Let us have a dagger between our teeth, a bomb in our hands, and love in our hearts.",
      "With struggle, you and I can liberate ourselves... ;)",
      "Conquering the world is easy, finding love is hard.",
      "War is peace. Freedom is slavery. Ignorance is strength."
    ];
  }]);
})();