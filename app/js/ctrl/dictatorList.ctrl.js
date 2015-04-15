angular
	.module('dictatorTinder')
	.controller('dictatorListCtrl', ['DictatorService', function(DictatorService) {
	    var self = this;
	    self.dictators = [];
	    self.dictators = DictatorService.query();
	  }]);