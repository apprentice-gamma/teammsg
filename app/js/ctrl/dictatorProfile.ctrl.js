(function(){

    angular
        .module('dictatorTinder')
        .controller('dictatorProfileCtrl', DictatorProfileCtrl);

        function DictatorProfileCtrl($http, $routeParams){

            var self = this;

            self.bios = [
            	"I enjoy long walks on the beach, playing the zither, and oppressing the common people. Message me if you want to get together and plot a coup, if you know what I mean.",
            	"Not looking for hookups, so don't ask. I am, however, looking for a left-hand man/woman to help me plan world domination.  And take care of my cats.",
            	"Oppression game on point. If you're a member of the proletariat, don't bother. 6'6' and lots to love.",
            	"Future world leader. Let's make fun of people who think freedom is a good idea.",
            	"5'7'. Dictator. 'The Notebook' is my favorite movie ever. I am an avid reader of Marxist literature, I have an excellent chef on staff, and I'll treat you better than most of my proles.",
            	"Fearless leader. Loves Netflix. I hope you swiped right for the right reasons.",
            	"Favorite quote: 'History repeats itself, first as tragedy, second as farce.' - Karl Marx",
            	"Free spirit. Only as part of the bourgeouise.",
            	"I like my beer dark, my whiskey strong, and my people oppressed. Message me if you want to talk about your pets, our future together, or totalitarianism.",
            	"I'm watching you.",
            	"Death is the solution to all problems. No man – no problem.",
            	"Looking for a special friend to vacation in Libya with...",
            	"I don't care if you respect me as long as you fear me.",
            	"Let us have a dagger between our teeth, a bomb in our hands, and love in our hearts.",
            	"With struggle, you and I can liberate ourselves... ;)",
            	"Conquering the world is easy, finding love is hard.",
            	"War is peace. Freedom is slavery. Ignorance is strength."
            ];
        	  
            self.randomBio = self.bios[Math.floor(Math.random() * self.bios.length)];
        }
})();
