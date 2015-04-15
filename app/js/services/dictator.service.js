app.factory('DictatorService', ['$resource', function($resource) {
    return $resource('demo-data.json');
  }]);