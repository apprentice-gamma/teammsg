(function() {

  angular
    .module('dictatorTinder')
    .factory('DictatorService', DictatorService);

  function DictatorService($resource) {
    return $resource('demo-data.json');
  }
})();