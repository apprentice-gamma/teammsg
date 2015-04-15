(function(){
	angular
		.module('dictatorTinder')
		.controller('dictatorListCtrl', DictatorListCtrl);

		function DictatorListCtrl(DictatorService){
			var self = this;
		    self.dictators = [];
		    self.dictators = DictatorService.query();
		}
});