angular.module('myApp').controller('mainCtrl', function ($scope, mainService) {
  $scope.datas = mainService.data;
});