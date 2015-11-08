angular.module('app2').controller('mainCtrl', function ($scope, mainService) {
  $scope.datas = mainService.data;
  console.log(mainService.data);
});